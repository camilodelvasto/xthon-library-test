<template>
  <div class="page-wrapper">
    <div class="container">
      <div class="form-wrapper">
        <form v-on:keyup.enter="">
          <div class="columns form-column__wrapper  is-multiline">
            <div class="column is-5 form-column__label-column">
              <label :for="`input-email_${_uid}`" class="label">How many miles will you ride:</label>
            </div>
            <div class="column is-5 form-column__input-column">
              <div class="control input-wrapper">
                <Icons icon="chart-line-variant" class="input-icon" iconwidth="20px" iconheight="20px" color="#999"></Icons>
                <input class="input" type="number" name="action" placeholder=""
                  :required="true"
                  v-model="form.howManyMiles"
                >
              </div>
            </div>
          </div>

          <div class="columns form-column__wrapper  is-multiline">
            <div class="column is-5 form-column__label-column">
              <label :for="`input-email_${_uid}`" class="label">Start location:</label>
            </div>
            <div class="column is-5 form-column__input-column">
              <div class="control input-wrapper">
                <Icons icon="location" class="input-icon" iconwidth="20px" iconheight="20px" color="#999"></Icons>
                <input class="input" type="text" name="action" placeholder=""
                  :required="true"
                  v-model="form.startLocation"
                >
              </div>
            </div>
          </div>

          <div class="columns form-column__wrapper  is-multiline">
            <div class="column is-5 form-column__label-column">
              <label :for="`input-email_${_uid}`" class="label">End location:</label>
            </div>
            <div class="column is-5 form-column__input-column">
              <div class="control input-wrapper">
                <Icons icon="location" class="input-icon" iconwidth="20px" iconheight="20px" color="#999"></Icons>
                <input class="input" type="text" name="action" placeholder=""
                  :required="true"
                  v-model="form.endLocation"
                >
              </div>
            </div>
          </div>

          <div class="columns form-column__wrapper  is-multiline">
            <div class="column is-5 form-column__label-column">
              <label :for="`input-email_${_uid}`" class="label">Date of the event:</label>
            </div>
            <div class="column is-5 form-column__input-column">
              <div class="control input-wrapper">
                <Icons icon="calendar" class="input-icon" iconwidth="20px" iconheight="20px" color="#999"></Icons>
                <datetime v-model="form.date"></datetime>
              </div>
            </div>
          </div>

          <div class="columns form-column__wrapper  is-multiline" v-if="enableNonprofitSearch">
            <div class="column is-5 form-column__label-column"><label class="label">Pick a nonprofit:</label></div>
            <NonprofitAjaxSearch
              v-if="canRender"
              v-on:selected="setNonprofit($event)"
              :standalone="false"
            ></NonprofitAjaxSearch>
          </div>

          <div class="columns form-column__wrapper is-multiline">
            <div class="column is-5 form-column__label-column"><label class="label">Is this:</label></div>
            <div class="column is-5 form-column__label-column">
              <label class="radio">
                <input type="radio" name="non-profit-is" v-model="form.ownRide" value="own">
                Your own ride
              </label>
              <label class="radio">
                <input type="radio" name="non-profit-is" v-model="form.ownRide" value="event">
                Part of an existing event
              </label>
            </div>
          </div>


          <transition name="slide-fade">
            <div class="columns form-column__wrapper  is-multiline" v-if="form.ownRide === 'event'">
              <div class="column is-5 form-column__label-column">
                <label :for="`input-email_${_uid}`" class="label">Name of the event</label>
              </div>
              <div class="column is-5 form-column__input-column">
                <div class="control input-wrapper">
                  <Icons icon="bike" class="input-icon" iconwidth="20px" iconheight="20px" color="#999"></Icons>
                  <input class="input" type="text" name="action" placeholder=""
                    :required="true"
                    v-model="form.eventName"
                  >
                </div>
              </div>
            </div>
          </transition>

          <button
            class="button is-success is-large"
            type="submit"
            @click.prevent="validateSubmit()"
          >Continue</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Icons from '@/components/general/Icons.vue';

export default {
  props: ['submitButtonLabel', 'enableNonprofitSearch'],
  /**
   * Uses dynamic import to speed up page performance.
   * See https://webpack.js.org/guides/code-splitting/ for reference.
   */
  components: {
    Icons,
    ComboBox: () => import('@/components/general/ComboBox.vue'),
    NonprofitAjaxSearch: () => import('@/components/general/NonprofitAjaxSearch.vue'),
  },
  mounted() {
    this.canRender = true;
    const storedForm = window.localStorage.getItem('nonprofitForm');
    if (storedForm) {
      this.form = JSON.parse(storedForm);
    }
  },
  data() {
    return {
      canRender: false,
      form: {},
      errorMessage: '',
      nonprofitErrorMessage: '',
      nonprofitIsErrorMessage: '',
      hoursErrorMessage: '',
      targetNonprofitErrorMessage: '',
    };
  },
  /**
   * TODO: validate form, submit data to api, display thank you or error dialog.
   */
  methods: {
    setNonprofit($event) {
      console.log($event);
    },
  },
  computed: {
    loggedIn() {
      return this.$store.state.user.loggedIn;
    },
  },
};
</script>

<style scoped lang="scss">
.form-column {
  &__wrapper {
    margin-top: 0;
    @include breakpoint($tablet) {
      line-height: 42px;
    }

    .column {
      padding-top: 0;
      padding-bottom: 0;
      margin-bottom: 5px;
      @include breakpoint($tablet) {
        margin-bottom: 0;
      }
    }
  }
  &__label-column {
    text-align: left;
    .label {
    }
  }
  &__input-column {

  }
  &__button-column {
    .button {
      display: block;
      width: 100%;
      border-radius: 20px !important;
    }
  }
  &__extra-padded {
    margin-bottom: 35px;
  }
  &__left-padded {
    padding-left: 80px;
    padding-right: 0;
    margin-right: 0;
    margin-left: 0;
  }
}

.inline-field {
  display: inline-block;
  margin: 0 5px 10px;
  width: 65px;
}

.radio-fields {
  display: block;
}

.page-wrapper {
  background-color: $white;
  color: #363636;
  text-align: center;
}

h1 {
  color: $color-emphasis;
  margin-bottom: 40px;
}

.combo-wrapper {
  justify-content: center;
  max-width: $max-combo-wrapper-width;
  margin: 0 auto;

  @include breakpoint($tablet) {
    display: flex;
    padding: 0 7%;
  }
}

.form-wrapper {
  max-width: 760px;
  margin: 20px auto 0;

  button[type=submit] {
    margin: 30px 0 30px;
  }

  label {
    font-size: 20px;
  }

  input,
  button,
  .button {
    font-size: 18px;
  }
}

.help {
  color: $color-medium-gray;
  font-style: italic;
  font-size: 17px;

  @include breakpoint($tablet) {
    text-align: left;
  }
}

.pad-more {
  margin-top: 20px;
}

.label {
  justify-content: flex-start;
  align-items: flex-start;
}
.is-padded-top {
  margin-top: 1em;
}
.is-pulled-left {
  text-align: left;
}

.bubbles-wrapper {
  @include breakpoint($tablet) {
    padding: 0 2%;
  }
}


.input-wrapper .input-icon {
  top: 0;
}

.radio + .radio {
  margin-left: 0;
}
</style>
