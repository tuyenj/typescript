<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>TypeScript Study</title>

    <!-- Fonts -->
    <link rel="stylesheet" href="{{asset('frontend/vendor/font-awesome.css')}}">
    <!-- Styles -->
    <link rel="stylesheet" href="{{asset('frontend/vendor/bootstrap.css')}}">
    <link rel="stylesheet" href="{{asset('frontend/style.css')}}">
</head>
<body>
<div class="container">
    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <h1 class="page-title">Shopping Cart <small></small></h1>
        </div>
    </div>

    <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div class="card card-block">
                <h5 class="card-title">List Products</h5>
                <div class="card-body" id="list-product">
                    test
                </div>
            </div>
        </div>

        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div class="card card-block">
                <div class="card-header"><h1 class="card-title">Your Cart</h1></div>
                <div class="card-body">
                    <table class="table">
                        <thead>
                        <tr>
                            <th width="4%">#</th>
                            <th>Pokemon</th>
                            <th width="15%">Price</th>
                            <th width="4%">Quantity</th>
                            <th width="20%">Subtotal</th>
                            <th width="25%">Action</th>
                        </tr>
                        </thead>
                        <tbody id="my-cart-body">
                        <!-- CART BODY -->
                        </tbody>
                        <tfoot id="my-cart-footer">
                        <!-- CART FOOTER -->
                        </tfoot>
                    </table>

                </div>
            </div>
            <div class="alert alert-success" role="alert" id="mnotification">Updated</div>
        </div>
    </div>
</div>
<script src="{{asset('frontend/vendor/bootstrap.js')}}"></script>
<script type="text/javascript" src="{{asset('js/shopping.js')}}"></script>
</body>
</html>
