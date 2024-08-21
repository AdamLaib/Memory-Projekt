const cantons = ['ag', 'ar', 'bl', 'fr', 'gl', 'ju', 'ne', 'ow', 'sh', 'sz', 'ag', 'ar', 'bl', 'fr', 'gl', 'ju', 'ne', 'ow', 'sh', 'sz'];
const list = []
cantons.sort(() => 0.5 - Math.random())



const getFlagPath = function (canton) {
  return `./img/${canton}.png`;
}




document.addEventListener('DOMContentLoaded', function () {
  const playground = document.getElementById('playground');
  cantons.forEach(function (value) {
    const tile = document.createElement('button');
    const tileImage = document.createElement('img');
    tileImage.setAttribute('src', getFlagPath(value));
    tile.appendChild(tileImage);
    playground.appendChild(tile);

    tile.addEventListener('click', function () {
      if (list.length <= 2) {
        tileImage.classList.add('visible')
        tile.classList.add('invisible')
        list.push(tile)
        list.push(tileImage)
      }
      else if(list[1].src == list[3].src){
        list[0].classList.add('matched')
        list[1].classList.add('matched')
        list[2].classList.add('matched')
        list[3].classList.add('matched')
        list.pop()
        list.shift()
        list.pop()
        list.shift()
      }

      else if (list[1].src != list[3].src) {
        for (const i of list) {
          list[1].classList.remove('visible')
          list[0].classList.remove('invisible')
          list[3].classList.remove('visible')
          list[2].classList.remove('invisible')
          list.pop()
          list.shift()
          list.pop()
          list.shift()
        }
      }
    });
  });
});