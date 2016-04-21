@extends("layout.layout")

@section('toolbar')
    @include("layout.toolbar")
@endsection
@section('content')
    <md-content layout="column" flex style="background: transparent" ng-controller="logincontroller">
        <div class="col-md-4 col-md-offset-4" style="margin-top: 100px;">
            <md-card class="md-padding">
                <form>
                    <md-content class="md-padding">
                        <md-input-container md-no-float class="md-block">
                            <md-icon><i class="mi mi-person"></i></md-icon>
                            <input ng-model="abhyasiid" type="text" placeholder="Abhyasi Id">
                            @if(env('tooltip'))
                                <md-tooltip md-direction="{{env('tooltipdirection')}}">
                                    Enter Abhyasi ID
                                </md-tooltip>
                            @endif
                        </md-input-container>

                        <md-input-container md-no-float class="md-block">
                            <md-icon><i class="mi mi-lock"></i></md-icon>
                            <input ng-model="abpassword" type="password" placeholder="Password">
                            @if(env('tooltip'))
                                <md-tooltip md-direction="{{env('tooltipdirection')}}">
                                    Enter Your Password
                                </md-tooltip>
                            @endif
                        </md-input-container>

                        <div style="margin-left: 18px;">
                            <md-checkbox>Remember me</md-checkbox>
                        </div>

                        <div class="">
                            <md-button class="pull-left">
                                Forget Password
                                @if(env('tooltip'))
                                    <md-tooltip md-direction="{{env('tooltipdirection')}}">
                                        Forget My Password
                                    </md-tooltip>
                                @endif
                            </md-button>
                            <md-button class="md-primary md-raised pull-right" ng-click="login()">Login
                                @if(env('tooltip'))
                                    <md-tooltip md-direction="{{env('tooltipdirection')}}">
                                        Login to My Account
                                    </md-tooltip>
                                @endif
                            </md-button>
                        </div>
                    </md-content>
                    <div><center><label class="error">[[error]]</label></center></div>
                </form>
            </md-card>
        </div>
    </md-content>
@endsection