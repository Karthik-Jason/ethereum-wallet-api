<template>
  <div class="nft-side-menu">
    <div class="desktop-menu">
      <ul class="listing-container">
        <li
          v-for="i in sortByCount"
          :key="i.key"
          :class="i.contract === selected ? 'selected' : ''"
          @click="selectNft(i)"
        >
          <span class="title">{{ i.title }}</span>

          <span class="count">({{ i.count }})</span>
          <i
            v-show="i.customNft"
            class="fa fa-times-circle clickable remove"
            @click="removeCustomEntry(i)"
          />
        </li>
        <li>
          <span class="add-custom" @click="openCustomModal"
            >+{{ $t('dapps.customNFT') }}</span
          >
        </li>
      </ul>
    </div>
    <div class="mobile-menu">
      <b-dropdown text="CryptoKitties (5)">
        <b-dropdown-item v-for="i in sortByCount" :key="i.key" href="#">
          {{ i.title }} ({{ i.count }})
        </b-dropdown-item>
      </b-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    supportedNftObj: {
      type: Object,
      default: function() {
        return {};
      }
    },
    initialHighlighted: {
      type: String,
      default: ''
    },
    loadingComplete: {
      type: Boolean,
      default: false
    },
    sentUpdate: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      selected: '',
      searchResults: []
    };
  },
  computed: {
    sortByCount() {
      return Object.values(this.supportedNftObj).sort((a, b) => {
        if (a.count < b.count) {
          return 1;
        }
        if (a.count > b.count) {
          return -1;
        }
        return 0;
      });
    }
  },
  watch: {
    loadingComplete() {
      this.setSelectedToTop();
    },
    sentUpdate() {
      this.setSelectedToTop();
    }
  },
  mounted() {
    this.selected = this.initialHighlighted;
  },
  methods: {
    openCustomModal() {
      this.$emit('openCustomModal');
    },
    setSelectedToTop() {
      this.selected = this.sortByCount[0].contract;
      this.$emit('selected', this.selected);
    },
    selectNft(nft) {
      this.searchResults = [];
      if (nft.count > 0) {
        this.selected = nft.contract;
        this.$emit('selected', nft.contract);
      }
    },
    showDetails(nft) {
      this.searchResults = [];
      this.$emit('showTokenDetails', nft);
    },
    removeCustomEntry(nft) {
      this.$emit('removeCustomNft', nft);
    }
  }
};
</script>

<style lang="scss" scoped>
@import 'NFTSideMenu.scss';
</style>
<style lang="scss">
@import '~@/scss/GlobalVariables';

.nft-side-menu .mobile-menu {
  .btn-group {
    width: 100%;
  }

  .btn-secondary,
  .btn-secondary:active {
    background-color: white;
    color: $dark-blue-2;
    border: 1px solid $light-grey-7;
    padding: 15px 25px;
    font-size: 18px;
    font-weight: 600;
    text-align: left;
  }

  .dropdown-menu {
    width: 100%;
    border: 1px solid $light-grey-7;
  }

  .dropdown-item {
    padding: 15px 30px;
  }
}
</style>
