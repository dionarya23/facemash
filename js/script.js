      /* Made By Dion Arya Pamungkas
      * Jika anda kurang ahli dalam jquery jangan ganti apapun
      * namun jika anda sudah mahir silahkan ganti sesuai hati anda
      * Terimakasih dionarya.p@gmail.com
      */

      var gambar1 = Math.floor((Math.random() * 5) + 1);
      var gambar2 = Math.floor((Math.random() * 5) + 1);
      var gambar1_add = Math.floor((Math.random() * 5) + 1);

      var gambar2_for = Math.floor((Math.random() * 5) + 1);

      if (gambar1 === gambar2 || gambar1 === gambar1_add || gambar1 === gambar2_for){
        if (gambar1 >= 5 || gambar2 >= 5){
          gambar1 = gambar1 - 1;
        }else{
          gambar1 = gambar1 + 1;
        }
      }else if(gambar1_add === gambar2_for || gambar2_for === gambar2){
        if (gambar1_add >= 5 || gambar2_for >= 5){
          gambar2_for = gambar2_for - 1;

        }else{
          gambar2_for = gambar2_for + 1;
        }
      }else {
        gambar1 = 1;
        gambar2 = 2;
        gambar1_add = 3;
        gambar2_for = 4;
      }


      var id_gambar1 = $('#a' + gambar1);
      var id_gambar2 = $('#b' + gambar2);
      var add_gambar1 = $('#a' + gambar1_add);
      var add_gambar2 = $('#b' + gambar2_for);

  id_gambar1.removeClass('hilang');
  id_gambar2.removeClass('hilang');

  $('#gambar1').on('click', function(){
    id_gambar2.addClass('hilang');
    add_gambar2.removeClass('hilang');

    id_gambar2  = add_gambar2;
    angka2      = Math.floor((Math.random() * 5) +1);
    if (gambar1 == angka2){
      if (angka2 >= 5){
        angka2 = angka2 - 5;
      }else{
        angka2 = angka2 + 1;
      }
    }
    add_gambar2 = $('#b' + angka2);
    console.log(add_gambar2);
  });

  $('#gambar2').on('click', function(){
    id_gambar1.addClass('hilang');
    add_gambar1.removeClass('hilang');

    id_gambar1  = add_gambar1;

    angka1      = Math.floor((Math.random() * 5) +1);
    if (gambar2 == angka1){
      if (angka1 >= 5){
        angka1 = angka1 - 5;
      }else{
        angka1 = angka1 + 1;
      }
    }

    add_gambar1 = $('#a' + angka1);
    console.log(add_gambar1);
  });
