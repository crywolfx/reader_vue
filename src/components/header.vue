<template>
    <header>
        <div class="app-name">
            vue_reader
        </div>
        <div class="app-search">
            <span class="search"><i class="iconfont icon-search"></i></span>
            <span class="more"><i class="iconfont icon-more2"></i></span>
        </div>
    </header>
</template>
<script>
export default {
    name: 'header',
}
</script>

<style lang="scss" scoped>
header {
    background: #CA0700;
    height: 1.4rem;
    width: 100%;
    padding: 0 0.3rem;
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    .app-name{
        font-size: .65rem;
        line-height: 1.4rem;
        float: left;
    }
    .app-search{
        float: right;
        line-height: 1.4rem;
        span{
            display: block;
            float: left;
            text-align: center;
        }
        .search{
            height: 1.4rem;
            width: 1.4rem;
        }
        .more{
            height: 1.4rem;
            width: 1.4rem;
        }
        .icon-search,.icon-more2{
            font-size: .65rem;
        }
    }
}
</style>


