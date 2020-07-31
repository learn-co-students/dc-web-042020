import React from 'react'
import Words from './Words'
import Word from './Word'
import { shallow } from 'enzyme'

describe('Words', () => {
    it ('renders this.props.words as Word Components', () => {
        let mockProps = {
            words: [
                { id: 1, img_url: null, word: 'skildpadden', img_url: null },
                { id: 2, img_url: null, word: 'katten', img_url: null }
            ]
        }

        let wrapper = shallow(<Words {...mockProps} />)
        expect(wrapper.find(Word).length).toBe(2)
    })
})