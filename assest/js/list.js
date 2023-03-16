const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

// flight__detail
// flight__fare__info
// flight__detail--tab
// flight__fare__info--tab

const flightDetail = $$('.flight__detail')
const flightFareInfo = $$('.flight__fare__info')
const detailTab = $$('.flight__detail--tab')
const fareInfoTab = $$('.flight__fare__info--tab')

const listLeftItems = $$('.list__left--item')

flightDetail.forEach((flightDetailItem, index) => {
    flightDetailItem.onclick = function () {
        if ($('.flight__fare__info.active') || $('.flight__fare__info.active') || $('.list__left--item.active')) {
            $('.flight__fare__info.active').classList.remove('active')
            $('.flight__fare__info--tab.active').classList.remove('active')
            $('.list__left--item.active').classList.remove('active')

        }

        this.classList.add('active')
        listLeftItems[index].classList.add('active')
        detailTab[index].classList.add('active')
    }
})

flightFareInfo.forEach((flightFareInfoItem, index) => {
    flightFareInfoItem.onclick = function () {
        if ($('.flight__detail.active') || $('.flight__detail--tab.active') || $('.list__left--item.active')) {
            $('.flight__detail.active').classList.remove('active')
            $('.flight__detail--tab.active').classList.remove('active')
            $('.list__left--item.active').classList.remove('active')
        }

        this.classList.add('active')
        listLeftItems[index].classList.add('active')
        fareInfoTab[index].classList.add('active')
    }
})