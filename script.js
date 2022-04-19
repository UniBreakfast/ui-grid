const slots = wrapper.querySelectorAll('.ui-slot')
const items = [...slots].map(slot => slot.firstElementChild)

updateItemPositions()

onresize = updateItemPositions

function updateItemPositions() {
  items.forEach((item, i) => {
    const {top, left, right, bottom} =
      slots[i].getBoundingClientRect()
    item.style = /* css */`
      top: ${top}px;
      left: ${left}px;
      right: ${innerWidth - right}px;
      bottom: ${innerHeight - bottom}px;
    `
  })
}
