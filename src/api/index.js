const _baseUrl = 'api.zhuishushenqi.com' 
const _baseUrl2 = 'chapter2.zhuishushenqi.com'
export default {
    get_book_complete(bookName) {  //书名自动补全
        return `${_baseUrl}/book/auto-complete?query=${bookName}`
    },
    get_book_details(bookId) {  //书籍详情
        return `${_baseUrl}/book/${bookId}`
    },
    get_book_resource(bookId) { //书源
        return `${_baseUrl}/toc?view=summary&book=${bookId}`
    },
    get_book_chapters(bookResourId) { //章节列表
        return `${_baseUrl}/toc/${bookResourId}?view=chapters`
    },
    get_book_content(bookLink) {  //章节内容
        return `${_baseUrl2}/chapter/${bookLink}?k=2124b73d7e2e1945&t=1468223717`
    },
    get_book_search(bookName) { //搜索图书（根据书名）
        return `${_baseUrl}/api.zhuishushenqi.com/book/fuzzy-search?query=${bookName}&start=0&limit=2`
    }
}