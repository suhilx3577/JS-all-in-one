function update(id){
    return function(content){
        document.querySelector('#'+id).textContent = content
    }
}

var updateHeader = update('heading-1');

// With this im able to edit my header again and again
updateHeader('This is my text content')
