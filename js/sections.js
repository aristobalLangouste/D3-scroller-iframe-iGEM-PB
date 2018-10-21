function display() {

var scroll = scroller().container(d3.select('#graphic'));

scroll(d3.selectAll('.step'));

        scroll.on('active', function (index) {
                d3.selectAll('.step').style('opacity', function (d, i) { return i === index ? 1 : 0.1; });
                let sourceCredit = "Source/Credit: ";
                  switch (index) {
                    case 0: //starting point
                          document.getElementById('iframe').src = "schema.html";
                          document.getElementById('source').innerText = sourceCredit + "Guillaume Levrier - Digital Culture @ Sciences Po";
                          break;
                    case 1: //1
                          document.getElementById('iframe').src = "explorations.html";
                          document.getElementById('source').innerText = "";
                          break;

                    case 2: //Mapping
                          document.getElementById('iframe').src = "https://imgs.xkcd.com/comics/map_projections.png";
                          document.getElementById('source').innerText = sourceCredit + "xkcd.com/977 by Randall Munroe - XKCD";
                          break;

                    case 3: //PornVsReality
                          document.getElementById('iframe').src = "img/soska117meme.png";
                          document.getElementById('source').innerText = sourceCredit + "@soska_117 - Instagram / edited by Guillaume Levrier";
                          break;

                    case 4: //Final remarks
                          document.getElementById('iframe').src = "https://www.youtube.com/embed/IOkHL8CC1y4?autoplay=1&mute=1#modestbranding=1&controls=0";
                          document.getElementById('source').innerText = sourceCredit + "Baron Noir - Kwaï/Studiocanal";
                          break;

                  };
            });

        scroll.on('progress', function (index, progress) {
        });
}

display();
