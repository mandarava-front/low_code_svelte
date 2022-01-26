<script>

// const dropEvent = (e) => {
//     console.log('e',e)
// }
function dropEvent(e){
    console.log('eee',e)
    console.log(e.dataTransfer,'\n',document.getElementById(e.dataTransfer.getData('Text')),'\n',e.dataTransfer.getData('Text'))

}

const dragover = (e) => {
    e.preventDefault()
}
</script>

<div on:drop={dropEvent} on:dragover={dragover} class="panel-content">

</div>

<style>
    .panel-content{
        width: 100%;
        height: 100%;
        background: #fefefe;
    }
</style>