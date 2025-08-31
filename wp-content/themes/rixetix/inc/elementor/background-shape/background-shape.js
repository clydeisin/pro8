(function($, elementorFrontend, elementorModules) {
    'use strict';
    var _decor = elementorModules.frontend.handlers.Base.extend({
        onInit() {
            const elementSettings = this.getElementSettings();
            if (elementSettings.rixetix_decor_top_left === 'yes') {
                this.$element.append(`<div class="rixetix-border-shape top-left"><svg viewBox="0 0 60 40"  xmlns="http://www.w3.org/2000/svg"><path d="M42.269 34.72L12.876 5.28C9.502 1.90154 5.919 0 0.145 0H0V40H55C50.226 40 45.642 38.0985 42.269 34.72Z"/></svg></div>`);
            }
            if (elementSettings.rixetix_decor_top_right === 'yes') {
                this.$element.append(`<div class="rixetix-border-shape top-right"><svg viewBox="0 0 60 40"  xmlns="http://www.w3.org/2000/svg"><path d="M42.269 34.72L12.876 5.28C9.502 1.90154 5.919 0 0.145 0H0V40H55C50.226 40 45.642 38.0985 42.269 34.72Z"/></svg></div>`);
            }
            if (elementSettings.rixetix_decor_bottom_right === 'yes') {
                this.$element.append(`<div class="rixetix-border-shape bottom-right"><svg viewBox="0 0 60 40"  xmlns="http://www.w3.org/2000/svg"><path d="M42.269 34.72L12.876 5.28C9.502 1.90154 5.919 0 0.145 0H0V40H55C50.226 40 45.642 38.0985 42.269 34.72Z"/></svg></div>`);
            }
            if (elementSettings.rixetix_decor_bottom_left === 'yes') {
                this.$element.append(`<div class="rixetix-border-shape bottom-left"><svg viewBox="0 0 60 40"  xmlns="http://www.w3.org/2000/svg"><path d="M42.269 34.72L12.876 5.28C9.502 1.90154 5.919 0 0.145 0H0V40H55C50.226 40 45.642 38.0985 42.269 34.72Z"/></svg></div>`);
            }
        }
    });

    $(window).on('elementor/frontend/init', () => {
        const addHandler = ($element) => {
            elementorFrontend.elementsHandler.addHandler(_decor, {
                $element,
            });
        };

        elementorFrontend.hooks.addAction('frontend/element_ready/section', addHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/container', addHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/widget', addHandler);
    });

}(jQuery, window.elementorFrontend, window.elementorModules));