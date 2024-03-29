<template>
  <div class="crypto-kitties-manager">
    <interface-container-title :title="$t('common.ntfManager')" />
    <div
      v-if="!isReady && isOnlineAndEth"
      class="inner-side-menu content-container"
    >
      <nft-side-menu :supported-nft-obj="sideMenuData" :nft-config="nftConfig">
      </nft-side-menu>
      <loading-sign :loadingmessage1="$t('common.loading')" />
    </div>
    <div v-if="isReady && hasNfts" class="inner-side-menu content-container">
      <nft-side-menu
        :supported-nft-obj="sideMenuData"
        :nft-config="nftConfig"
        :initial-highlighted="selectedContract"
        :loading-complete="countsRetrieved"
        :sent-update="sentUpdate"
        @selected="changeSelectedContract"
        @openCustomModal="openCustomModal"
        @removeCustomNft="openRemovalConfirmModal"
      >
      </nft-side-menu>
      <div v-if="showDetails">
        <nft-details
          :nft="detailsFor"
          :selected-title="nftTitle"
          @nftTransferred="removeSentNft"
          @resetNFT="resetNFT"
          @back="comeBack"
        ></nft-details>
      </div>
      <div v-if="!showDetails">
        <content-block-title :button-text="ntfCount" :title="nftTitle" />
        <!-- TODO Clean Up Design and Improve Mobile -->
        <div class="grid-container">
          <div v-for="nft in nftToShow" :key="nft.key" class="kitty">
            <div class="kitty-img" @click="showNftDetails(nft)">
              <div v-show="!hasImage(nft)" class="placeholder">
                <div class="animated-background"></div>
              </div>
              <div v-show="hasImage(nft)">
                <img :src="getImage(nft)" alt @load="hasLoaded(nft)" />
              </div>
              <p>#{{ nft.token | ConcatToken }}</p>
            </div>
          </div>
          <div v-show="selectedNtf.count > 9" class="internal-nav-container">
            <span
              v-show="startIndex > 0"
              class="internal-nav prev"
              @click="getPrevious()"
            >
              <i class="fa fa-chevron-left"></i>
            </span>
            <span v-show="!collectionLoading">{{
              $t('dapps.showingRange', { first: startIndex, last: endIndex })
            }}</span>
            <span v-show="collectionLoading">{{
              $t('dapps.loadingRange', { first: startIndex, last: endIndex })
            }}</span>
            <span
              v-show="showNextButton"
              class="internal-nav next"
              @click="getNext()"
            >
              <i class="fa fa-chevron-right"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div v-if="isReady && !hasNfts" class="inner-side-menu content-container">
      <div v-show="!reLoading">
        <h3 class="no-nft-notice">{{ $t('dapps.noNFTs') }}</h3>
        <standard-button
          :options="onlyCustom"
          @click.native="openCustomModal"
        />
      </div>
      <span v-show="reLoading">{{ $t('dapps.reloading') }}</span>
    </div>

    <div v-if="!isOnlineAndEth">
      <div v-show="!online">
        NFTs are
      </div>
      <div v-show="online">
        {{ $t('dapps.removeCustomNFT', { value: network.type.name_long }) }}
      </div>
    </div>
    <div class="flex--row--align-start mft-manager-content-container"></div>
    <nft-custom-add-modal
      ref="customModal"
      :add-token="addCustom"
      :active-address="activeAddress"
    ></nft-custom-add-modal>
    <nft-custom-confirm-remove-modal
      ref="customRemoveModal"
      :for-removal="forRemoval"
      @remove="removeCustomNft"
    >
    </nft-custom-confirm-remove-modal>
  </div>
</template>

<script>
import store from 'store';
import LoadingSign from '@/components/LoadingSign';
import InterfaceContainerTitle from '@/layouts/InterfaceLayout/components/InterfaceContainerTitle';
import ContentBlockTitle from '@/layouts/InterfaceLayout/components/ContentBlockTitle';
import NFTSideMenu from '@/layouts/InterfaceLayout/containers/NFTManagerContainer/components/NFTSideMenu';
import NftDetails from './components/NftDetails';
import NftCustomAddModal from './components/NftCustomAddModal';
import NftCustomConfirmRemove from './components/NftCustomConfirmRemove';
import { mapState } from 'vuex';
import hexDecoder from './binaryDecoderNFT';
import { nftABI } from './abis';
import StandardButton from '@/components/Buttons/StandardButton';
import placeholderImage from '@/assets/images/icons/defaultToken.png';
import utils from 'web3-utils';

const URL_BASE = 'https://nft.mewapi.io/nft';

export default {
  components: {
    'nft-custom-add-modal': NftCustomAddModal,
    'nft-custom-confirm-remove-modal': NftCustomConfirmRemove,
    'loading-sign': LoadingSign,
    'content-block-title': ContentBlockTitle,
    'nft-side-menu': NFTSideMenu,
    'interface-container-title': InterfaceContainerTitle,
    'nft-details': NftDetails,
    'standard-button': StandardButton
  },
  filters: {
    ConcatToken(value) {
      if (!value) return '';
      if (value.length > 20)
        return `${value.substr(0, 15)}...${value.substr(value.length - 6)}`;
      return value;
    }
  },
  data() {
    return {
      nftABI,
      countPerPage: 9,
      nftConfig: [],
      tokenHelper: {},
      mayHaveTokens: [true, true],
      countsRetrieved: false,
      showDetails: false,
      reLoading: false,
      selectedContract: '0x06012c8cf97bead5deae237070f9587f8e7a266d',
      detailsFor: {},
      nftTokens: {},
      nftData: {},
      ownedTokens: [],
      tokenContractAddress: '0xeA3352C1a3480Ac5a32Fcd1F2854529BA7193F14',
      sentUpdate: 0,
      customNFTs: [],
      forRemoval: {},
      collectionLoading: false,
      onlyCustom: {
        title: this.$t('dapps.addCustomNFT'),
        buttonStyle: 'green',
        helpCenter: false,
        noMinWidth: true,
        fullWidth: false
      },
      nftObjectClone: {}
    };
  },
  computed: {
    ...mapState(['account', 'web3', 'online', 'network']),
    endIndex() {
      if (this.nftData[this.selectedContract]) {
        if (!this.nftData[this.selectedContract].details) return 0;
        const ids_retrieved = this.nftData[this.selectedContract].details
          .length;
        const increment =
          ids_retrieved > this.countPerPage ? this.countPerPage : ids_retrieved;
        return this.nftData[this.selectedContract].currentIndex + increment;
      }
    },
    nftTitle() {
      if (this.nftData[this.selectedContract]) {
        return this.nftData[this.selectedContract].title;
      }
      return 'Loading';
    },
    nftToShow() {
      if (this.nftData[this.selectedContract]) {
        if (!this.nftData[this.selectedContract].details) return [];
        return this.nftData[this.selectedContract].details.length >
          this.countPerPage
          ? this.nftData[this.selectedContract].details.slice(
              this.nftData[this.selectedContract].currentIndex,
              this.nftData[this.selectedContract].currentIndex +
                this.countPerPage
            )
          : this.nftData[this.selectedContract].details;
      }
      return [];
    },
    ntfCount() {
      if (this.nftData[this.selectedContract]) {
        return this.$t('dapps.nftOwnCount', {
          perPage: this.countPerPage,
          count: this.nftData[this.selectedContract].count
        });
      }

      return this.$t('dapps.noneOwned');
    },
    selectedNtf() {
      if (this.nftData[this.selectedContract]) {
        return this.nftData[this.selectedContract];
      }
      return {};
    },
    showNextButton() {
      if (this.nftData[this.selectedContract]) {
        const ids_retrieved = this.nftData[this.selectedContract].count;
        return (
          this.endIndex !== ids_retrieved && this.endIndex <= ids_retrieved
        );
      }
    },
    sideMenuData() {
      return this.nftData;
    },
    startIndex() {
      if (this.nftData[this.selectedContract]) {
        return this.nftData[this.selectedContract].currentIndex;
      }
      return 0;
    },
    activeAddress() {
      return this.account.address;
    },
    hasNfts() {
      return Object.values(this.nftData).some(entry => entry.count > 0);
    },
    isReady() {
      return this.isOnlineAndEth && this.countsRetrieved;
    },
    isOnlineAndEth() {
      return this.online && this.network.type.name === 'ETH';
    }
  },
  watch: {},
  async mounted() {
    await this.setup();
  },
  methods: {
    addCustom(address, symbol) {
      this.reLoading = true;
      this.customNFTs.push({
        ERC721Extension: true,
        contract: address,
        customNft: true,
        title: symbol
      });
      this.$refs.customModal.$refs.modal.hide();
      store.set('customNFTs', this.customNFTs);
      this.sentUpdate += 1;
      this.setup();
    },
    removeCustomNft(item) {
      this.reLoading = true;
      const customNFTs = store.get('customNFTs');
      if (customNFTs !== undefined && customNFTs !== null) {
        const entryIndex = customNFTs.findIndex(
          entry => item.contract === entry.contract
        );
        customNFTs.splice(entryIndex, 1);
        store.set('customNFTs', customNFTs);
        this.setup();
        this.sentUpdate += 1;
      }
    },
    openRemovalConfirmModal(item) {
      this.forRemoval = item;
      this.$refs.customRemoveModal.$refs.modal.show();
    },
    openCustomModal() {
      this.$refs.customModal.$refs.modal.show();
    },
    hasLoaded(nft) {
      this.$set(nft, 'loaded', true);
    },
    hasImage(nft) {
      if (nft.customNft) {
        return true;
      }
      if (nft.loaded) {
        return true;
      }
    },
    removeSentNft(nft) {
      this.nftObjectClone = utils._.clone(this.nftData[nft.contract]);
      const afterSent = this.nftData[nft.contract].details.filter(entry => {
        return entry.token !== nft.token;
      });
      this.$set(this.nftData[nft.contract], 'details', afterSent);
      this.nftData[nft.contract].count -= 1;
      if (this.nftData[nft.contract].count === 0) this.sentUpdate += 1;
      this.showDetails = false;
    },
    resetNFT(nft) {
      this.nftData[nft.contract] = this.nftObjectClone;
    },
    changeSelectedContract(selectedContract) {
      this.selectedContract = selectedContract;
      this.showDetails = false;
    },
    comeBack() {
      this.showDetails = false;
    },
    getImage(nft) {
      if (nft.customNft) {
        return placeholderImage;
      }
      return nft.image;
    },
    async setup() {
      const stateItems = {
        count: 0,
        selected: false,
        startIndex: 0,
        priorIndex: 0,
        currentIndex: 0,
        details: []
      };

      const customNFTs = store.get('customNFTs');

      if (customNFTs !== undefined && customNFTs !== null) {
        this.customNFTs = customNFTs;
      }
      const configData = await this.getTokenConfig();

      const nftConfig = configData
        .map(entry => {
          return {
            ...entry,
            contract: entry.contractAddress
          };
        })
        .reduce((accumulator, currentValue) => {
          if (currentValue.active) {
            accumulator.push(currentValue);
          }
          return accumulator;
        }, []);

      this.nftConfig = [...this.customNFTs, ...nftConfig];
      this.nftData = this.nftConfig.reduce((accumulator, currentValue) => {
        accumulator[currentValue.contract] = {
          ...currentValue,
          ...stateItems
        };
        return accumulator;
      }, {});

      if (this.network.type.name === 'ETH') {
        this.getOwnedCounts();
        this.getOwned();
      }
    },
    async getNftImagePath(contract, token) {
      const image = await fetch(
        `${URL_BASE}?contract=${contract}&token=${token}`,
        {
          mode: 'cors',
          cache: 'no-cache',
          method: 'GET'
        }
      );
      return await image.json();
    },
    async getOwnedCounts(address = this.activeAddress) {
      const supportedNftTokens = this.nftConfig
        .filter(entry => entry.ERC721Extension)
        .map(entry => entry.contract);
      const tokenContract = new this.web3.eth.Contract(nftABI);
      tokenContract.options.address = this.tokenContractAddress;

      const res = await tokenContract.methods
        .getTokenBalances(supportedNftTokens, address.toLowerCase())
        .call();
      hexDecoder(res).map((val, idx) => {
        this.nftData[supportedNftTokens[idx]].count = Number.isNaN(
          val.toNumber()
        )
          ? 0
          : val.toNumber();
        return val.toString();
      });
    },
    async getOwned(address = this.activeAddress, nftData = this.nftData) {
      if (!this.processing) {
        this.processing = true;
        const supportedNftTokens = Object.keys(nftData);

        const result = await this.getOwnedTokens(
          supportedNftTokens,
          address,
          nftData
        );
        this.ready = true;
        this.processing = false;
        return result;
      }
    },
    async getOwnedNonStandard(
      contract,
      address,
      offset = 0,
      limit = this.countPerPage
    ) {
      fetch(
        `${URL_BASE}?nonStandardContract=${contract}&address=${address}&offset=${offset}&limit=${limit}`,
        {
          mode: 'cors',
          cache: 'no-cache',
          method: 'GET'
        }
      )
        .then(data => {
          return data.json();
        })
        .then(rawJson => {
          this.nftData[contract].count = rawJson.total;
          this.countsRetrieved = true;
          const getNestedObject = (nestedObj, pathArr, token) => {
            return pathArr.reduce((obj, key) => {
              if (key === '@tokenvalue@') {
                key = token.toString();
              }
              return obj && obj[key] !== 'undefined' ? obj[key] : undefined;
            }, nestedObj);
          };

          const metadataKeys = this.nftData[contract].metadataKeys || [
            'kitties'
          ];
          const imageKey = this.nftData[contract].imageKey || 'image_url_png';

          const list = getNestedObject(rawJson, metadataKeys).map(val => {
            return {
              contract: contract,
              token: val.id,
              image: val[imageKey]
                ? `${URL_BASE}/image?path=${val[imageKey]}`
                : ''
            };
          });

          this.nftData[contract].details = list.slice(0, 9);
          this.$set(this.nftData[contract], 'details', list.slice(0, 9));
          return this.nftData[contract].details;
        })
        .then(list => {
          if (!list) return;
          if (list.length > 0) {
            const retrieveCount =
              list.length > this.countPerPage ? this.countPerPage : list.length;
            for (let j = 0; j < retrieveCount; j++) {
              if (!Number.isNaN(list[j].token) && list[j].image === '') {
                this.getNftImagePath(contract, list[j].token)
                  .then(image => {
                    this.nftData[contract].details[
                      j
                    ].image = `${URL_BASE}/image?path=${image.image}`;
                  })
                  .catch(() => {
                    if (this.nftData[contract].details[j]) {
                      this.nftData[contract].details[j].image = '';
                    }
                  });
              }
            }
          }
          setTimeout(() => {
            this.reLoading = false;
          }, 3000);
        });
    },
    async getOwnedStandard(
      contract,
      offset,
      count = this.countPerPage,
      address = this.activeAddress,
      tokenContract = undefined,
      custom = false
    ) {
      if (!tokenContract) {
        tokenContract = new this.web3.eth.Contract(nftABI);
        tokenContract.options.address = this.tokenContractAddress;
      }

      tokenContract.methods
        .getOwnedTokens(contract, address.toLowerCase(), offset, count)
        .call()
        .then(res => {
          return hexDecoder(res).map(val => {
            const content = {
              contract: contract,
              token: val.toNumber(),
              image: ''
            };
            if (custom) {
              content.customNft = true;
              content.token = val.toFixed(0).toString();
            }
            return content;
          });
        })
        .then(list => {
          if (!list) return;
          this.nftData[contract].details = list;
          this.$set(this.nftData[contract], 'details', list);
          if (list.length > 0) {
            const retrieveCount =
              list.length > this.countPerPage ? this.countPerPage : list.length;
            for (let j = 0; j < retrieveCount; j++) {
              if (!Number.isNaN(list[j].token) && !list[j].customNft) {
                this.getNftImagePath(contract, list[j].token)
                  .then(image => {
                    this.nftData[contract].details[
                      j
                    ].image = `${URL_BASE}/image?path=${image.image}`;
                  })
                  .catch(() => {
                    if (this.nftData[contract].details[j]) {
                      this.nftData[contract].details[j].image = '';
                    }
                  });
              } else if (list[j].customNft) {
                this.nftData[contract].details[j].image = '';
              }
            }
          }
          this.collectionLoading = false;
        });
    },
    async getOwnedTokens(contracts, address, nftData) {
      const tokenContract = new this.web3.eth.Contract(nftABI);
      tokenContract.options.address = this.tokenContractAddress;
      for (let i = 0; i < contracts.length; i++) {
        nftData = await this.loadForContract(
          contracts[i],
          nftData,
          address,
          tokenContract
        );
      }
    },
    getNext(address = this.account.address) {
      this.collectionLoading = true;
      const content = this.nftData[this.selectedContract];
      const offset = content.currentIndex + this.countPerPage;
      if (offset <= content.count) {
        // update offsets if not at the end
        content.priorIndex = content.currentIndex;
        content.currentIndex = offset;
      } else {
        // update offsets if not at the end
        content.priorIndex = content.currentIndex;
        content.currentIndex = content.count;
      }

      if (content.nonStandard) {
        this.getOwnedNonStandard(
          content.contract,
          address,
          offset,
          this.countPerPage
        );
      } else {
        if (content.customNft) {
          this.getOwnedStandard(
            content.contract,
            offset,
            this.countPerPage,
            undefined,
            undefined,
            true
          );
        } else {
          this.getOwnedStandard(content.contract, offset, this.countPerPage);
        }
      }
    },
    getPrevious(address = this.activeAddress) {
      this.collectionLoading = true;
      const content = this.nftData[this.selectedContract];

      let offset = content.currentIndex - content.priorIndex;

      if (content.currentIndex - offset >= 0) {
        content.currentIndex = content.currentIndex - offset;
      } else {
        content.currentIndex = 0;
      }

      if (content.priorIndex - offset >= 0) {
        content.priorIndex = content.priorIndex - offset;
      } else {
        content.priorIndex = 0;
      }

      if (content.currentIndex === 0 && content.priorIndex === 0) {
        offset = 0;
      } else {
        offset = content.currentIndex;
      }

      if (offset >= 0) {
        if (content.nonStandard) {
          this.getOwnedNonStandard(
            content.contract,
            address,
            offset,
            this.countPerPage
          );
        } else {
          if (content.customNft) {
            this.getOwnedStandard(
              content.contract,
              offset,
              this.countPerPage,
              undefined,
              undefined,
              true
            );
          } else {
            this.getOwnedStandard(content.contract, offset, this.countPerPage);
          }
        }
      }
    },
    async getTokenConfig() {
      const data = await fetch(`${URL_BASE}?supported=true`, {
        mode: 'cors',
        cache: 'no-cache',
        method: 'GET',
        'Cache-Control': 'no-cache'
      });
      return await data.json();
    },
    async loadForContract(
      contract,
      nftData,
      address = this.activeAddress,
      tokenContract = null
    ) {
      if (nftData[contract].ERC721Extension) {
        this.getOwnedStandard(
          contract,
          0,
          this.countPerPage,
          address,
          tokenContract,
          nftData[contract].customNft
        ).then(result => {
          this.nftData[contract].details = result;
        });

        return nftData;
      } else if (nftData[contract].nonStandard) {
        this.getOwnedNonStandard(contract, address);
      }
      return nftData;
    },
    showNftDetails(nft) {
      this.detailsFor = nft;
      this.showDetails = true;
    }
  }
};
</script>

<style lang="scss" scoped>
@import 'NFTManagerContainer.scss';
</style>
