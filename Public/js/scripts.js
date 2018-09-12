$(function() {
    // GET/READ 
    $('#get-button').on('click', function(){ 
        console.log('Get Test');  
        $.ajax({
            url: '/tasks',
            
            contentType: 'application/json',
            success: function(respone) {
                var tbodyEl = $('tbody');
               // console.log(respone);
                tbodyEl.html('');

                respone.Task.forEach(function(task) {
                    tbodyEl.append('\
                        <tr>\
                            <td><input type="checkbox" class="checked"></td>\
                            <td class="id">'+ task.name + '</td>\
                            <td><input type="text" class="name" value="' + task.status + '"></td>\
                            <td>\
                                <button class="update-button">Update</button>\
                                <button class="delete-button">DELETE</button>\
                            </td>\
                        </tr>\
                    ');
                });
            }
        });
    });



    // Greate Data
    $('#create-form').on('submit', function(event) {
        event.preventDefault();

        var createInput = $('#create-input');
        console.log('Create Testing');
        $.ajax({
            url: '/tasks',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ name: createInput.val() }),
            success: function(respone) {
                $('tbody').prepend(

                    '<tr>\
                    <td class="id">'+ respone.name + '</td>\
                    <td><input type="text" class="name" value="' + respone.status + '"></td>\
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
    
});