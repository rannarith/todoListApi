$(function() {
    // GET/READ 
    $('#get-button').on('click', function(){ 
        
        $.ajax({
            url: '/tasks',
            
            contentType: 'application/json',
            success: function(respone) {
                var tbodyEl = $('tbody');
               // console.log(respone);
                tbodyEl.html('');

                respone.Task.forEach(function(task) {
                    $('tbody').append(

                        '<tr>\
                        <td><input type="checkbox" class="checked"></td>\
                        <td class="id">'+ task._id + '</td>\
                        <td><input type="text" class="name"  value="' + task.name + '"></td>\
                        <td class="status">'+ task.status + '</td>\
                        <td>\
                            <button class="update-button">Update</button>\
                            <button class="delete-button">DELETE</button>\
                        </td>\
                    </tr>\    '
                    );
                });
            }
        });
    });



    // create Data
    $('#create-form').on('submit', function(event) {
        event.preventDefault();

        var createInput = $('#create-input');
        
        
        $.ajax({
            url: '/tasks',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ name: createInput.val() }),
            success: function(task) {
                $('tbody').prepend(

                    '<tr>\
                        <td><input type="checkbox" class="checked"></td>\
                        <td class="id">'+ task._id + '</td>\
                        <td><input type="text" class="name"  value="' + task.name + '"></td>\
                        <td class="status">'+ task.status + '</td>\
                        <td>\
                            <button class="update-button">Update</button>\
                            <button class="delete-button">DELETE</button>\
                        </td>\
                    </tr>\    '
                );
                // console.log(respone);
                // createInput.val('');
                // $('#get-button').click();
            }
        });
    });
    
    // Update
    $('table').on('click', '.update-button', function() {
        var rowEl = $(this).closest('tr');
        var id = rowEl.find('.id').text();
        var newName = rowEl.find('.name').val();
        
        $.ajax({
            url: '/tasks/' + id,
            method:'PUT',
            contentType: 'application/json',
            data: JSON.stringify({ name: newName }),
            success: function(task) {
               console.log(task);
                             
            }
        });
    });

    //Delete
    $('table').on('click', '.delete-button', function() {
        var rowEl = $(this).closest('tr');
        var id = rowEl.find('.id').text();
        console.log('DElete');
        
        $.ajax({
            url: '/tasks/' + id,
            method:'DELETE',
            contentType: 'application/json',            
            success: function(task) {
               console.log(task);
               
            }
            
        });
        
    });



});