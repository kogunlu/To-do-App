const button = document.querySelector('#button')
const itemList = document.querySelector('#itemList')


 button.addEventListener('click', saveIt)

 function saveIt (){
    const todoItem = document.querySelector('#todoItem')

    const li = document.createElement('li')
    const p = document.createElement('p')
    const removeBtn = document.createElement("button")
   
    const div = document.createElement('div')


        li.classList.add('w-full')
        li.classList.add('flex')
        li.classList.add('justify-between')
        li.classList.add('mt-2')
        li.classList.add('border')
        li.classList.add('rounded-md')
        li.classList.add('border-indigo-500/50')
        li.classList.add('pl-5')
        li.classList.add('items-center')

        removeBtn.innerText = 'X'
        removeBtn.classList.add('mr-5')
        removeBtn.classList.add('border')
        removeBtn.classList.add('border-rose-100')
        removeBtn.classList.add('rounded-md')
        removeBtn.classList.add('w-5')
        removeBtn.classList.add('mt-1')
        removeBtn.classList.add('mb-1')
        removeBtn.classList.add('hover:bg-red-400')
        removeBtn.classList.add('hover:text-indigo-100')

        p.classList.add('italic')
        p.classList.add('text-indigo-800')
        p.classList.add('font-semibold')



    p.innerText = todoItem.value

   
    div.append(removeBtn)

    li.append(p)
    li.append(div)
    

    itemList.appendChild(li)

    removeBtn.addEventListener('click', function(){
       li.remove() 
    })

    todoItem.value = '' 

    const priority = document.querySelector('#priority')
    if(priority.value === 'high'){
        li.classList.add('bg-red-400')
    }else if(priority.value === 'low'){
        li.classList.add('bg-green-200')
    }else{
        li.classList.add('bg-indigo-300')
    }

    priority.value = 'Choose importance'
}



