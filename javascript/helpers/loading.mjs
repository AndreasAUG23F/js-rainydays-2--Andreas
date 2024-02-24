const showLoader = () => {
    const loader = document.getElementById('loader')
    loader.hidden = false
}

const hideLoader = () => {
    const loader = document.getElementById('loader')
    loader.hidden = true
}

export const loader = async (APIFunction, Url ) => {
    showLoader()
    try{
        await APIFunction(Url)
    }catch(error){
        alert(error)
    }
    finally{
        hideLoader()
    }
}