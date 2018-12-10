import { shallowMount } from '@vue/test-utils'
import TheHeader from './TheHeader'

describe('TheHeader', () => {
    const wrapper = shallowMount(TheHeader);
    
    
    it('Should render', ()=> {
        expect(wrapper.html()).toBeTruthy();
    })

    describe('toggles "is-visible" class on click', () => {
        const burger = wrapper.find('[data-test="burger"]');
        const nav = wrapper.find('[data-test="nav"]');

        it('Nav doesn\'t have is-visible class at start', () => {
            expect(nav.classes('is-visible')).toBe(false)
            expect(wrapper.emitted('navToggled')).toBeFalsy()
        })
        
        it('Adds is-visible class on click', () => {
            burger.trigger('click');
            expect(nav.classes('is-visible')).toBe(true)
            expect(wrapper.emitted('navToggled')).toBeTruthy()
            expect(wrapper.emitted('navToggled')).toHaveLength(1)
            expect(wrapper.emitted('navToggled')[0]).toEqual([true]);
            //toEqual comparse non primitives
        })
        
        it('Removes is-visible class on next click', () => {
            burger.trigger('click');
            expect(nav.classes('is-visible')).toBe(false)
            expect(wrapper.emitted('navToggled')).toHaveLength(2)
            expect(wrapper.emitted('navToggled')[1]).toEqual([false]);
        })
    })

    //With router-link
    // it('Should render with router-link', ()=> {
    //     const wrapper = shallowMount(TheHeader, {
    //         stubs: ['router-link', 'router-view']
    //     });

    //     expect(wrapper.html()).toBeTruthy();
    // })
})