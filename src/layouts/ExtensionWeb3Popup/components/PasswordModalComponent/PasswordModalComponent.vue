<template>
  <div>
    <b-modal
      ref="passwordModal"
      hide-footer
      hide-header
      title="Address"
      modal-class="cx-password-modal"
    >
      <div class="modal-contents">
        <div class="header-container">
          <p>Password</p>
          <i class="fa fa-times fa-lg" @click="close" />
        </div>
        <form class="password-form">
          <div class="input-container">
            <input
              ref="mnemonicPasswordInput"
              :type="show ? 'text' : 'password'"
              v-model="password"
              name="Password"
              autocomplete="off"
              placeholder="Enter password"
            />
            <p v-show="error.msg !== ''" class="error-msg">{{ error.msg }}</p>
            <img
              v-if="show"
              src="@/assets/images/icons/show-password.svg"
              @click.prevent="show = !show"
            />
            <img
              v-if="!show"
              src="@/assets/images/icons/hide-password.svg"
              @click.prevent="show = !show"
            />
          </div>
          <button
            :disabled="password === '' || loading || error.errored"
            class="submit-button large-round-button-green-filled"
            type="submit"
            @click.prevent="func"
          >
            <span v-show="!loading">{{ actionName }}</span>
            <i v-show="loading" class="fa fa-spin fa-spinner" />
          </button>
        </form>
        <p class="terms">
          By entering your password, you accept our
          <a
            href="https://www.myetherwallet.com/terms-and-conditions"
            target="_blank"
          >
            Terms and conditions
          </a>
        </p>
      </div>
    </b-modal>
  </div>
</template>
<script>
export default {
  props: {
    func: {
      type: Function,
      default: () => {}
    },
    actionName: {
      type: String,
      default: ''
    },
    loading: {
      type: Boolean,
      default: false
    },
    error: {
      type: Object,
      default: () => {
        return {
          msg: '',
          errored: false
        };
      }
    }
  },
  data() {
    return {
      show: false,
      password: ''
    };
  },
  watch: {
    password(newVal) {
      this.$emit('passwordChange', newVal);
    }
  },
  methods: {
    close() {
      this.$refs.passwordModal.hide();
    }
  }
};
</script>
<style lang="scss" scoped>
@import 'PasswordModalComponent.scss';
</style>
