/**
 * @file
 * Generic Drupal Web Components Example behaviors.
 */

import "@gdwc/components/dist/components.es";


(function (Drupal) {
  /**
   * Behavior description.
   */
  Drupal.behaviors.gdwcExample = {
    attach: function (context, settings) {
      console.log("It works!");
    },
  };
})(Drupal);
