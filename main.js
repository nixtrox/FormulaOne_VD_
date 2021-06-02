$(document).ready(function () {
  $('.navbar-nav li').click(function (x) {
    $('.navbar-nav li').removeClass('active');
    $(event.target).parent().addClass('active');
  });
});

function showCircuit() {
    $('#circuit').change(function (o) {
      switch (o.target.value) {
        case 'ITA':
          $('#circuitimage').attr('src', 'img/monza.jpg');
          $('#f1sound')[0].play();
          break;
        case 'HUN':
          $('#circuitimage').attr('src', 'img/hungaroring.jpg');
          break;
        case 'BEL':
          $('#circuitimage').attr('src', 'img/spa.jpg');
          break;
        case 'MON':
          $('#circuitimage').attr('src', 'img/monaco.jpg');
          break;

        default:
          break;
      }
    });
  }


  showCircuit();

//---------------------------------------------------------

function calculate() {
    
    let laptime = document.getElementById("laptime").value;

    let laptime2 = laptime / 3600

    let mapLength = document.getElementById("circuit").value;

    if( mapLength == "ITA"){

      let answer = 5793 / laptime2;

      console.log(laptime2);

     document.getElementById("averagespeed").value = answer + " Km/h"
    }


    if( mapLength == "HUN"){

      let answer = 4381 / laptime2;

      console.log(laptime2);

     document.getElementById("averagespeed").value = answer + " Km/h"
    }

    if( mapLength == "MON"){

      let answer = 3337 / laptime2;

      console.log(laptime2);

     document.getElementById("averagespeed").value = answer + " Km/h"
    }


    if( mapLength == "BEL"){

      let answer = 7004 / laptime2;

      console.log(laptime2);

     document.getElementById("averagespeed").value = answer + " Km/h"
    }



  }
