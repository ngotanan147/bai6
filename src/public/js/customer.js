const URL = 'https://project1-ngotanan.herokuapp.com'
$('.form-create').submit(function (e) {
    e.preventDefault();
    console.log('submit')
    const formData = {
        name: $('.form-create input[name=name]').val(),
        age: $('.form-create input[name=age]').val(),
    }
    $.ajax({
        type: "POST",
        url: `${URL}/create`,
        contentType: 'application/json',
        data: JSON.stringify(formData),
        encode: true,
    }).done(function (res) {
        console.log(res)
        if (res.status == true) {
            $('#customer').append(`
                <tr class="text-center" id="${res.data._id}_container">
                    <td id="${res.data._id}_name">${res.data.name}</td>
                    <td id="${res.data._id}_age">${res.data.age}</td>
                    <td>
                        <button class='btn btn-info edit' data-id="${res.data._id}" data-bs-toggle="modal"
                            data-bs-target="#editModal">Edit modal</button>
                        <button class='btn btn-warning detete' data-id="${res.data._id}">Remove</button>
                    </td>
                </tr>
            `)
            $('.form-create input[name=name]').val('')
            $('.form-create input[name=age]').val('')
            $('.btn-close').click()
            deletee()
            edit()
            editButtonClick()
        }
    })
})
function editButtonClick() {
    return (
        $('.edit').click(function (e) {
            let id = $(this).attr('data-id')
            let name = $('#' + id + '_name').html()
            let age = $('#' + id + '_age').html()

            $('.edit-modal input[name=name]').val(name)
            $('.edit-modal input[name=age]').val(age)
            $('.edit-modal').attr('data-id', id)
        })
    )
}


function deletee() {
    return (
        $('.detete').click(function (e) {
            const id = $(this).attr('data-id')
            console.log(id)
            $.ajax({
                type: "DELETE",
                url: `${URL}/delete/${id}`,
                contentType: 'application/json',
                encode: true,
            }).done(function (res) {
                if (res.status == true) {
                    $('#' + id + '_container').html('')
                }
            })
        })
    )
}
function edit() {
    return (
        $('.edit-modal').submit(function (e) {
            e.preventDefault()
            const id = $(this).attr('data-id')
            const formData = {
                name: $('.edit-modal input[name=name]').val(),
                age: $('.edit-modal input[name=age]').val(),
            }
            $.ajax({
                type: "PUT",
                url: `${URL}/edit/${id}`,
                data: JSON.stringify(formData),
                contentType: 'application/json',
                encode: true,
            }).done(function (res) {
                console.log(res)
                $('#' + id + '_name').html(res.data.name)
                $('#' + id + '_age').html(res.data.age)
                $('.btn-close').click()
            })
        })
    )
}
edit()
deletee()
editButtonClick()







