//js
wow = new WOW(
 {
 boxClass:     'wow',      // default
 animateClass: 'animated', // default
 offset:       10,          // default
 mobile:       true,       // default
 live:         true        // default
}
)
wow.init();

//AOS
AOS.init();
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

//jq
$(document).ready(function(){

	//counterUp Start
	$('.count').counterUp({
		delay:10,
		time: 1000
	});
})


//hw:24 mar from 
//https://www.jqueryscript.net/tags.php?/counter/
//wowjs plugin: https://wowjs.uk/docs.html
// 1-2 from best 10 countup
// 1-2 from Simple jQuery & 
//aos jq plugin- recommended
//aos  https://michalsnik.github.io/aos/
//own choice animation js query plugin: reval js plugin
//particle js particle
//buoyant particle js plugin --recommended