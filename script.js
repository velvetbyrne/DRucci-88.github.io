$(document).ready(function(){
    $(".btnDetails").click(function(){

        let a = $(this).closest('.col-item');
        // console.log(a);
        let image = a.find('#image').attr('src');
        let productName = a.find('#name').text();
        let price = a.find('#price').text();
        let rating = a.find('#rating').find('i').clone();
        // console.log(image,productName,price);
        // console.log(rating);

        let b = $('.modal-content');
        b.find('#image').attr('src', image);
        
        b.find('.col-md-8 #name').text(productName);
        
        b.find('.col-md-8 #price').text(price);

        b.find('#rating').html(rating);

        $("#productModal").modal("show");
    });
    $('.btnAdd').click(function (e) { 
        e.preventDefault();
        let a = $(this).closest('.col-item');
        // console.log(a);
        let image = a.find('#image').attr('src');
        let productName = a.find('#name').text();
        let price = a.find('#price').text();
        let rating = a.find('#rating').find('i');

        // console.log(image,productName,price);
        console.log(rating);
        let idCol = document.createElement('td');
        idCol.innerHTML = '';

        let productNameCol = document.createElement('td');
        productNameCol.innerHTML = productName;

        let priceCol = document.createElement('td');
        priceCol.innerHTML = price;

        let ratingCol = document.createElement('td');
        let i = 0;
        for (i=0;i<rating.length;i++){
            ratingCol.appendChild(document.createTextNode('\u2B50'));
            // ratingCol.appendChild('&#9733;');
        }
        

        let newRow = document.createElement('tr');
        newRow.appendChild(idCol);
        newRow.appendChild(productNameCol);
        newRow.appendChild(priceCol);
        newRow.appendChild(ratingCol);

        const table = document.getElementById('tableOrder');
        const tbody = table.querySelector('tbody');

        tbody.appendChild(newRow);
    });
});
