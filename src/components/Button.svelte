<script>
    export let text = 'button'
</script>


<div class="button" draggable="true">
    <button><span>{text}</span></button>
</div>

<style>
    .button{
        /* border: 1px solid #ccc; */
        width: 80px;
        height: 40px;
    }
    button{
        width: 80px;
        height: 40px;
        background:#fff;
        margin: 0;
        padding-bottom:10px ;
        line-height: 20px;
    }
</style>