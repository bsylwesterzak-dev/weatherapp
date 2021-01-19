import gsap from 'gsap';

export default class GsapManager {

    static timelineSettings = {
        defaults: { ease: "power3.inOut" }
    }

    static animate(wrapper, animationStart, animationId, additionalParams) {
        if(wrapper.current) {
            const [elements] = wrapper.current.children;
            gsap.set(elements, animationStart);
            const t1 = gsap.timeline( GsapManager.timelineSettings );
            GsapManager._useAnimation(t1, elements, animationId, additionalParams);
        }
    }

    static _useAnimation(timeline, elements, animationId, additionalParams) {
        switch(animationId) {
            case "ScaleAnimation":
                timeline.fromTo(elements, { scale: additionalParams ? 0 : 1 }, { duration: 1, autoAlpha: additionalParams ? 1 : 0, scale: additionalParams ? 1 : 0 });  
                break;
            case "ScaleYAnimation":
                timeline.fromTo(elements, { scaleY: additionalParams ? 0 : 1 }, { duration: 1, autoAlpha: additionalParams ? 1 : 0, scaleY: additionalParams ? 1 : 0 }); 
                break;   
            default:
                break;    
        }
    }

}