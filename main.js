const todoArray = [];

$(document).ready(()=>{
	$('input').keydown(event=>{
       if(event.which === 13){
            let text = $('input').val();
            let todos = todoArray.push(text);
             // 
            $('.list').append(`<li>${text}</li>`);
            $('input').val("")
        }
	})
	$('li').on('click', ()=>{
	    let text2 = $("li").val();
        $('.done').append(`<li>${text2}</li>`)
	})
})