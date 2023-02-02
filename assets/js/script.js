
  var presentDay = $('#currentDay');
  var presentTime = moment().hour();

  presentDay.text(moment().format('MMMM Do YYYY, h:mm:ss a'));

  $('.saveBtn').on('click', function() {
    var currentTimeOfDay = $(this).siblings('.hour').text();
    var textBlock = $(this).siblings('.description').val();

    localStorage.setItem(currentTimeOfDay, textBlock);
  });
  
  var refresh = function() {
    $('.hour').each(function() {
      if ($(this).text() !== null) {
        $(this).siblings('.description').val(localStorage.getItem($(this).text()));
      }
    });
  };

  var taskToDo = function () {
    $('.time-block').each(function () {
      var timeBlock = parseInt($(this).attr('id'));
      // console.log(presentTime);
      if (timeBlock === presentTime) {
        $(this).addClass ('present');
      } else if (timeBlock > presentTime) {
        $(this).addClass ('future');
      } else {
        $(this).addClass ('past');
      }
    });

  };

  setInterval(function () {
    $('.hour').each(function () {
      taskToDo();
    });
  }, 1800000);

  taskToDo();
  refresh();