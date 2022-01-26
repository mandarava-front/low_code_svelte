<button class="v-btn" {style}>{value}</button>

<script>

    export let style = ''
    export let value = '按钮'
</script>

<style>

    .v-btn {
        display: inline-block;
        width: 100%;
        height: 100%;
        border: 1px solid #ccc;
        margin: 0;
        padding: 10px;
        outline: 0;
        background:#fff;
        color: #666;
        cursor: pointer;
        text-align: center;
        line-height: 1;
        -webkit-appearance: none;
        font-weight: normal;
        font-size: 14px;
        white-space: nowrap;
        box-sizing: border-box;
        transition: 0.1s;

    }
    .v-btn:active {
    color: #3e8ee6;
    border-color: #3e8ee6;
    outline: 0;
  }

  .v-btn:hover {
    background-color: #ecf5ff;
    color: #348ee6;
  }
</style>