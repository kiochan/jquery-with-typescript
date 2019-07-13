
import * as JQuery from 'jquery'

declare global {
    interface Window { $: typeof JQuery; }
}

window.$ = JQuery

// now you can use type-save jquery api

const body: JQuery<HTMLElement> = $(document.body)
const myElement: JQuery<HTMLElement> = $('<div>')

myElement
.css({
    position: 'absolute',
    backgroundColor: '#ff0000',
    width: '100px',
    height: '100px'
})
.appendTo(
    $(document.body)
)
.animate({
    width: 100
}, 1000, () => {
    console.log('animate() is finished')
})
