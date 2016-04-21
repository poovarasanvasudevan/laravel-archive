@include("layout.header")
<div layout="column" flex>
    @yield("toolbar")

    @yield("content")
</div>
@include("layout.footer")