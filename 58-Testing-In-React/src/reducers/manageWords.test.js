import manageWords from './manageWords'

let testWords = {
    words: [
        {id: 1, name: "katten", img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"},
        {id: 2, name: "avisen", img_url: "https://im-media.voltron.voanews.com/Drupal/01live-166/styles/sourced/s3/2020-04/ap_paper.jpg?itok=pevRrI3j"},
        {id: 3, name: "skildpadden", img_url: "https://s3.amazonaws.com/filestore.rescuegroups.org/6685/pictures/animals/9629/9629687/70631879_385x385.jpg"},
        {id: 4, name: "osten", img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSZTFupDecwShDuEwbYcAYFm14TtKAdJwZ7wg&usqp=CAU"},
        {id: 5, name: "gaffelen", img_url: "https://media.istockphoto.com/photos/fork-on-black-background-picture-id987346626?k=6&m=987346626&s=612x612&w=0&h=WXWCwfMlL9rW2igFpM_kkiQ_pNgGnNRX9CJTWaHY9Rw="},
        {id: 6, name: "brødet", img_url: "https://tastesbetterfromscratch.com/wp-content/uploads/2020/03/Bread-Recipe-5-2-500x500.jpg"}
    ]
}

describe ('manageWords', () => {
    it ('handles @@INIT', () => {
        let result = manageWords(undefined, { type: "@@INIT" })
        expect(result).toEqual(testWords)
    })
    it ('handles ADD_WORD', () => {
        let mockState = testWords
        let mockAction = { type: 'ADD_WORD', payload: {name: 'fuglen', img_url: null} }
        let result = manageWords(mockState, mockAction)
        expect(result.words.length).toBe(7)
    })
    it ('handles DELETE_WORD', () => {
        let mockState = testWords
        let mockAction = { type: 'DELETE_WORD', payload: 3 }
        let result = manageWords(mockState, mockAction)
        expect(result.words.length).toBe(5)
    })
})