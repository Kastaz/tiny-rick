import { shallowMount } from '@vue/test-utils';
import BaseItem from './BaseItem.vue';

// define setup when sharing 
const setup = (props = {}, options = {}) => {
    const wrapper = shallowMount(BaseItem, {
        propsData: {
            title: 'Lorem',
            subtitle: 'ipsum',
            ...props
        },
        ...options
    })

    return wrapper
}

describe('BaseItem', () => {
    describe('with an img', () => {
        const wrapper = setup({
            img: 'qwe.jpg'
        });

        const img = wrapper.find('[data-test="img"]')
        const title = wrapper.find('[data-test="title"]')
        const subtitle = wrapper.find('[data-test="subtitle"]')
        
        it('Render title', () => {
            expect(title.text()).toBe('Lorem')
        })

        it('Render subtitle', () => {
            expect(subtitle.text()).toBe('ipsum')
        })

        it('Render img with proper src', () => {
            expect(img.exists()).toBe(true)
            expect(img.attributes('src')).toEqual('qwe.jpg')
        })
    })
    
    describe('without an img', () => {
        const wrapper = setup();
        // const wrapper = shallowMount(BaseItem, {
        //     propsData: {
        //         title: 'Lorem',
        //         subtitle: 'ipsum',
        //     }
        // })
        
        const img = wrapper.find('[data-test="img"]')
        const title = wrapper.find('[data-test="title"]')
        const subtitle = wrapper.find('[data-test="subtitle"]')

        it('Render title', () => {
            expect(title.text()).toBe('Lorem')
        })

        it('Render subtitle', () => {
            expect(subtitle.text()).toBe('ipsum')
        })

        it('Render without img', () => {
            expect(img.exists()).toBe(false)
        })
    })

    //check slots, with additional options in setup
    it('Renders default slot', () => {
        const wrapper = setup({}, {
          slots: {
            default: '<span>Hi</span>'
          }
        })
    
        const content = wrapper.find('[data-test="content"]');
    
        expect(content.exists()).toBe(true);
        expect(content.element.innerHTML).toBe('<span>Hi</span>');
      });

    // it('Should render without img', () => {
    //     const wrapper = shallowMount(BaseItem, {
    //         propsData: {
    //             title: 'Lorem',
    //             subtitle: 'ipsum',
    //         }
    //     })
        
    //     const img = wrapper.find('[data-test="img"]')
    //     const title = wrapper.find('[data-test="title"]')
    //     const subtitle = wrapper.find('[data-test="subtitle"]')

    //     expect(title.text()).toBe('Lorem')
    //     expect(subtitle.text()).toBe('ipsum')
    //     expect(img.exists()).toBe(false)
    // });
});
