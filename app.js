// $(document).ready(function() {
//   var arr = [];
//   // Get Users Method
//   $('#getUsers').on('click', function() {
//     return $.ajax({
//       method: 'GET',
//       url: 'http://reqr.es/api/users?page=1',
//       success: function(res) {
//         console.log(res);
//         arr = res.data
//         insertData();
//       }
//     })
//   })

//   // Add current users to DOM
//   var insertData = function() {
//     for (var i = 0; i < arr.length; i++) {
//       $('#userInfo' + (i + 1)).html('<div>' +
//         'User Info:' +
//         '<li>' +
//         'First name: ' + arr[i].first_name +
//         '</li>' +
//         '<li>' +
//         'Last name: ' + arr[i].last_name +
//         '</li>' +
//         '<hr>' +
//         '</div>'
//       )
//     };
//   }

//   //Add new user
//   $('#addUser').on('click', function() {
//     var userName = $('#name').val();
//     var userJob = $('#job').val();
//     $('#name').val("");
//     $('#job').val("");
//     return $.ajax({
//       method: 'POST',
//       url: 'http://reqr.es/api/users',
//       data: {name: userName, job: userJob},
//       success: function(data) {
//         console.log(data)
//         $('#recentUser').html(
//             '<li>' +
//               'name: ' + data.name +
//             '</li>' +
//             '<li>' +
//               'job: ' + data.job +
//             '</li>' +
//             '<li>' +
//               'id: ' + data.id +
//             '</li>' +
//             '<li>' +
//               'created at: ' + data.createdAt +
//             '</li>'
//         )
//       }
//     })
//   });
// })


















