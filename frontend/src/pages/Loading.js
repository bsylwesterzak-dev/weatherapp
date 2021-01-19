import React, {useRef, useEffect} from 'react';
import FlexWrapper from '../styledComponents/FlexWrapper';
import { ReactComponent as Scene } from '../scene.svg';
import gsap from 'gsap';
import { useHistory } from "react-router-dom";

const Loading = () => {
    const wrapper = useRef(null);
    const history = useHistory();
    useEffect(() => {
        const [elements] = wrapper.current.children;
        const red = elements.getElementsByClassName('red');
        const ground = elements.getElementsByClassName('ground');
        const blue = elements.getElementsByClassName('blue');
        const left_tree = elements.getElementsByClassName('left_tree');
        const right_tree = elements.getElementsByClassName('right_tree');
        const clock = elements.getElementsByClassName('clock');
        const character = elements.getElementsByClassName('character');
        const snow = elements.getElementsByClassName('snow');
        gsap.set([snow, red, ground, blue, left_tree, right_tree, clock, character], { autoAlpha: 0 });
        gsap.set([left_tree,right_tree, character], {transformOrigin: '50% 100%'});
        gsap.set([red,blue,clock,snow], {transformOrigin: '50% 50%'});

        const t1 = gsap.timeline({defaults: {ease: 'power3.inOut'}});
        t1.fromTo(ground, {x: '-=300'}, {duration:1, x: '+=300', autoAlpha: 1}) 
           .fromTo([left_tree, right_tree], {scaleY: 0}, {duration: 1, autoAlpha: 1, scaleY: 1})
           .fromTo([blue, red], {scale: .85}, {duration: .75, scale: 1, autoAlpha:1} )
           .fromTo(clock, {scale: .85}, {duration: .75, scale: 1, autoAlpha: 1})
           .fromTo(character, {scaleY: 0}, {duration: 1, autoAlpha: 1, scaleY: 1})
           .fromTo(snow, {scale: .85}, {duration: 7, scale: 1, autoAlpha:1}, '-=6' )
        
        setTimeout(() => {
            history.push('/login')
        }, 5000)
    }, [])
    return (
        <div ref={wrapper}>
        <FlexWrapper loading direction='column' justify='center' align='center' height='100vh'>
            <Scene />
        </FlexWrapper>
        </div> 
    )
}

export default Loading;