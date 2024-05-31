<!DOCTYPE html>
<!--
This is a starter template page. Use this page to start your new project from
scratch. This page gets rid of all links and provides the needed markup only.
-->
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>AdminLTE 3 | Starter</title>

    <!-- Google Font: Source Sans Pro -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
    <!-- Font Awesome Icons -->
    <link rel="stylesheet" href="plugins/fontawesome-free/css/all.min.css">
    <!-- Theme style -->
    <link rel="stylesheet" href="dist/css/adminlte.min.css">
</head>

<body class="hold-transition sidebar-mini">
    <div class="wrapper">

        <!-- Navbar -->
        <nav class="main-header navbar navbar-expand navbar-white navbar-light">
            <!-- Left navbar links -->
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
                </li>
                <li class="nav-item d-none d-sm-inline-block">
                    <a href="index3.html" class="nav-link">Home</a>
                </li>
                <li class="nav-item d-none d-sm-inline-block">
                    <a href="#" class="nav-link">Contact</a>
                </li>
            </ul>

            <!-- Right navbar links -->
            <ul class="navbar-nav ml-auto">
                <!-- Navbar Search -->
                <li class="nav-item">
                    <a class="nav-link" data-widget="navbar-search" href="#" role="button">
                        <i class="fas fa-search"></i>
                    </a>
                    <div class="navbar-search-block">
                        <form class="form-inline">
                            <div class="input-group input-group-sm">
                                <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search">
                                <div class="input-group-append">
                                    <button class="btn btn-navbar" type="submit">
                                        <i class="fas fa-search"></i>
                                    </button>
                                    <button class="btn btn-navbar" type="button" data-widget="navbar-search">
                                        <i class="fas fa-times"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </li>

                <!-- Messages Dropdown Menu -->
                <li class="nav-item dropdown">
                    <a class="nav-link" data-toggle="dropdown" href="#">
                        <i class="far fa-comments"></i>
                        <span class="badge badge-danger navbar-badge">3</span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                        <a href="#" class="dropdown-item">
                            <!-- Message Start -->
                            <div class="media">
                                <img src="dist/img/user1-128x128.jpg" alt="User Avatar" class="img-size-50 mr-3 img-circle">
                                <div class="media-body">
                                    <h3 class="dropdown-item-title">
                                        Brad Diesel
                                        <span class="float-right text-sm text-danger"><i class="fas fa-star"></i></span>
                                    </h3>
                                    <p class="text-sm">Call me whenever you can...</p>
                                    <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                </div>
                            </div>
                            <!-- Message End -->
                        </a>
                        <div class="dropdown-divider"></div>
                        <a href="#" class="dropdown-item">
                            <!-- Message Start -->
                            <div class="media">
                                <img src="dist/img/user8-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3">
                                <div class="media-body">
                                    <h3 class="dropdown-item-title">
                                        John Pierce
                                        <span class="float-right text-sm text-muted"><i class="fas fa-star"></i></span>
                                    </h3>
                                    <p class="text-sm">I got your message bro</p>
                                    <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                </div>
                            </div>
                            <!-- Message End -->
                        </a>
                        <div class="dropdown-divider"></div>
                        <a href="#" class="dropdown-item">
                            <!-- Message Start -->
                            <div class="media">
                                <img src="dist/img/user3-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3">
                                <div class="media-body">
                                    <h3 class="dropdown-item-title">
                                        Nora Silvester
                                        <span class="float-right text-sm text-warning"><i class="fas fa-star"></i></span>
                                    </h3>
                                    <p class="text-sm">The subject goes here</p>
                                    <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                </div>
                            </div>
                            <!-- Message End -->
                        </a>
                        <div class="dropdown-divider"></div>
                        <a href="#" class="dropdown-item dropdown-footer">See All Messages</a>
                    </div>
                </li>
                <!-- Notifications Dropdown Menu -->
                <li class="nav-item dropdown">
                    <a class="nav-link" data-toggle="dropdown" href="#">
                        <i class="far fa-bell"></i>
                        <span class="badge badge-warning navbar-badge">15</span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                        <span class="dropdown-header">15 Notifications</span>
                        <div class="dropdown-divider"></div>
                        <a href="#" class="dropdown-item">
                            <i class="fas fa-envelope mr-2"></i> 4 new messages
                            <span class="float-right text-muted text-sm">3 mins</span>
                        </a>
                        <div class="dropdown-divider"></div>
                        <a href="#" class="dropdown-item">
                            <i class="fas fa-users mr-2"></i> 8 friend requests
                            <span class="float-right text-muted text-sm">12 hours</span>
                        </a>
                        <div class="dropdown-divider"></div>
                        <a href="#" class="dropdown-item">
                            <i class="fas fa-file mr-2"></i> 3 new reports
                            <span class="float-right text-muted text-sm">2 days</span>
                        </a>
                        <div class="dropdown-divider"></div>
                        <a href="#" class="dropdown-item dropdown-footer">See All Notifications</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-widget="fullscreen" href="#" role="button">
                        <i class="fas fa-expand-arrows-alt"></i>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
                        <i class="fas fa-th-large"></i>
                    </a>
                </li>
            </ul>
        </nav>
        <!-- /.navbar -->

        <!-- Main Sidebar Container -->
        <aside class="main-sidebar sidebar-dark-primary elevation-4">
            <!-- Brand Logo -->
            <a href="index3.html" class="brand-link">
                <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
                <span class="brand-text font-weight-light">AdminLTE 3</span>
            </a>

            <!-- Sidebar -->
            <div class="sidebar">
                <!-- Sidebar user panel (optional) -->
                <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div class="image">
                        <img src="dist/img/user.png" class="img-circle elevation-2" alt="User Image">
                    </div>
                    <div class="info">
                        <a href="#" id="user-id" class="d-block ">User</a>
                    </div>
                    <script>
                        document.getElementById('user-id').innerHTML = localStorage.getItem('user_email');
                    </script>
                </div>

                <!-- SidebarSearch Form -->
                <div class="form-inline">
                    <div class="input-group" data-widget="sidebar-search">
                        <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search">
                        <div class="input-group-append">
                            <button class="btn btn-sidebar">
                                <i class="fas fa-search fa-fw"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Sidebar Menu -->
                <nav class="mt-2">
                    <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->

                        <li class="nav-item">
                            <a href="/addExpenses/" class="nav-link active">
                                <i class="nav-icon fas fa-th"></i>
                                <p>
                                    Add Expenses
                                </p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="/addExpenses/stats" class="nav-link">
                                <i class="nav-icon fas fa-chart-bar"></i>
                                <p>
                                    Statistics
                                </p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="/expenses/" class="nav-link ">
                                <i class="nav-icon fas fa-th"></i>
                                <p>
                                    Expenses
                                </p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="/inventory/" class="nav-link ">
                                <i class="nav-icon fas fa-table"></i>
                                <p>
                                    Inventory
                                </p>
                            </a>
                        </li>
                    </ul>
                </nav>
                <!-- /.sidebar-menu -->
            </div>
            <!-- /.sidebar -->
        </aside>

        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
            <!-- Content Header (Page header) -->
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0">Add Expenses</h1>
                        </div><!-- /.col -->
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                                <li class="breadcrumb-item"><a href="#">Home</a></li>
                                <li class="breadcrumb-item active">Add Expenses</li>
                            </ol>
                        </div><!-- /.col -->
                    </div><!-- /.row -->
                </div><!-- /.container-fluid -->
            </div>
            <!-- /.content-header -->

            <!-- Main content -->
            <div class="content">
                <div class="container-fluid">
                    <div class="row">
                        <!-- left column -->
                        <div class="col-md-12">
                            <!-- jquery validation -->

                            <div class="card card-primary">
                                <div class="card-header">
                                    <h3 class="card-title">Expenses Form <small></small></h3>
                                </div>
                                <!-- /.card-header -->
                                <section class="content">
                                    <div class="container-fluid">
                                        <h2 class="text-center display-4"></h2>
                                        <div class="row">
                                            <div class="col-md-8 offset-md-2">
                                                <form action="simple-results.html">
                                                    <div class="input-group">
                                                        <input type="search" class="form-control form-control-lg" placeholder="Search by Item Name" id="searchInput" placeholder="Search by itemName">
                                                        <div class="input-group-append">
                                                            <button type="submit" class="btn btn-lg btn-default">
                                                                <i class="fa fa-search"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <!-- form start -->
                                <form id="quickForm">
                                    <div class="card-body">
                                        <ul class="nav nav-tabs" id="custom-tabs-one-tab" role="tablist">
                                            <li class="nav-item">
                                                <a class="nav-link active" id="custom-tabs-one-home-tab" data-toggle="pill" onclick="filterResults('All')" role="tab" aria-controls="custom-tabs-one-home" aria-selected="true">All</a>
                                            </li>

                                        </ul>
                                        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

                                        <script>
                                            var items = <?= json_encode($items) ?>;
                                            console.log(items);
                                            var categories = [];
                                            items.forEach(function(item) {
                                                if (!categories.includes(item.inventoryItemCategoryName)) {
                                                    categories.push(item.inventoryItemCategoryName);
                                                    var categoryTab =
                                                        `<li class="nav-item">
                                                        <a class="nav-link" onclick="filterResults('${item.inventoryItemCategoryName}')" data-toggle="pill" id="category-${item.inventoryItemCategoryName}" href="#category-${item.inventoryItemCategoryName}" role="tab" aria-controls="category-${item.inventoryItemCategoryName}" aria-selected="false">${item.inventoryItemCategoryName}</a>
                                                    </li>`;
                                                    $('#custom-tabs-one-tab').append(categoryTab);
                                                }
                                            });
                                        </script>
                                        <script>

                                        </script>

                                        <div class="form-group">
                                            <label class="item-label" for="exampleInputEmail1">Date:</label>

                                            <input required type="date" name="date" class="form-control " id="" placeholder="01/01/2023">
                                        </div>

                                        <script>

                                        </script>
                                        <style>
                                            .input-outer {
                                                display: flex;
                                            }

                                            .input-side-element {
                                                width: 10%;
                                                display: flex;
                                                justify-content: center;
                                                align-items: center;
                                                font-weight: bold;
                                                color: #858585;
                                            }

                                            .inline-submit {
                                                color: #fff;
                                                background-color: #007bff;
                                                border-radius: 5px;
                                                border-color: #007bff;
                                            }

                                            .input-units {
                                                border-radius: 5px;
                                                border: 1px solid #ced4da;
                                            }

                                            @media only screen and (max-width: 750px) {
                                                .input-side-element {
                                                    width: 65px;
                                                }
                                            }
                                        </style>
                                        <?php foreach ($items as $item) : ?>
                                            <div class="form-outer">
                                                <div class="expenses-form-group form-group">
                                                    <input readonly type="hidden" name="items[]" value="<?= $item['inventoryItemID'] ?>">
                                                    <input class="category-name-input" readonly type="hidden" name="categories[]" value="<?= $item['inventoryItemCategoryName'] ?>">
                                                    <label class="expenses-item-label" for="exampleInputEmail1"><?= $item['itemName'] ?>:</label>
                                                    <div class="input-outer">
                                                        <input type="number" name="qtys[]" class="form-control expenses-input" id="<?= "qty" . $item['itemName'] ?>" placeholder="Quantity(<?= $item['sku'] ?>)">
                                                        <div class="input-side-element input-units"><?= $item['sku'] ?></div>
                                                    </div>
                                                    <div class="input-outer">
                                                        <input type="number" name="prices[]" class="form-control expenses-input" id="<?= "price" . $item['itemName'] ?>" placeholder="Price">
                                                        <div class="input-side-element input-units"><span>LKR</span></div>
                                                    </div>
                                                    <div class="input-outer">
                                                        <input type="text" name="descriptions[]" class="form-control expenses-input" id="<?= "desc" . $item['itemName'] ?>" placeholder="Description">
                                                        <button type="submit" class="input-side-element inline-submit">SAVE</button>
                                                    </div>

                                                </div>

                                            </div>


                                            <script>
                                                jQuery(document).ready(function($) {
                                                    $("#<?= "qty" . $item['itemName'] ?>").change(function() {
                                                        console.log("Quantity field changed");
                                                        var priceField = $("#<?= "price" . $item['itemName'] ?>");
                                                        if ($(this).val() > 0) {
                                                            priceField.prop('required', true);
                                                        } else {
                                                            priceField.prop('required', false);
                                                        }
                                                    });
                                                });
                                            </script>

                                        <?php endforeach; ?>
                                        <script>

                                        </script>

                                    </div>
                                    <!-- /.card-body -->
                                    <div class="card-footer">
                                        <button type="submit" class="btn btn-primary">Submit</button>
                                    </div>
                                </form>
                                <script>

                                </script>
                            </div>
                            <!-- /.card -->
                        </div>
                        <!-- /.col-md-6 -->
                    </div>
                    <!-- /.row -->
                </div><!-- /.container-fluid -->
            </div>
            <!-- /.content -->
        </div>
        <!-- /.content-wrapper -->

        <!-- Control Sidebar -->
        <aside class="control-sidebar control-sidebar-dark">
            <!-- Control sidebar content goes here -->
            <div class="p-3">
                <h5>Controls</h5>
                <a href="" id="logoutBtn">Log Out</a>
            </div>
            <script>
                document.getElementById('logoutBtn').addEventListener('click', function() {
                     fetch('<?php echo base_url() ?>api/logout', {
                            method: 'GET',
                            credentials: 'same-origin'
                        })
                        .then(response => {
                            if (response.ok) {
                                window.location.href = '<?= base_url() ?>/user/login';
                            }
                        })
                        .catch(error => {
                            console.error('Error:', error);
                        });
                });
            </script>
        </aside>
        <style>
            #response-message {
                position: fixed;
                bottom: 20px;
                right: -500px;
                background-color: #4CAF50;
                color: white;
                padding: 10px 20px;
                border-radius: 10px;
                border: solid 2px #387a4a;
            }
        </style>
        <div id="response-message">
            <span id="response-message-txt">✔️ Data Saved Successfully</span>
        </div>

        <!-- /.control-sidebar -->

        <!-- Main Footer -->
        <footer class="main-footer">
            <!-- To the right -->
            <div class="float-right d-none d-sm-inline">
                Anything you want
            </div>
            <!-- Default to the left -->
            <strong>Copyright &copy; 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong> All rights reserved.
        </footer>
    </div>
    <!-- ./wrapper -->

    <!-- REQUIRED SCRIPTS -->
    <script>
        /**
         * Filters the expenses form groups based on the provided keyword.
         *
         * @param {string} keyWord - The keyword to filter the expenses form groups by. If 'All', all form groups will be shown.
         */
        var categotyFilter = "All";

        function filterResults(keyWord) {
            categotyFilter = keyWord;
            $('.expenses-form-group').show();

            if (keyWord !== 'All') {
                $('.category-name-input').each(function() {
                    if ($(this).val() !== keyWord) {
                        $(this).closest('.expenses-form-group').hide();
                    }
                });
            }
        }




        /**
         * Adds a keyup event listener to the '#searchInput' element that filters the '.expenses-form-group' elements based on the search term entered.
         * When the user types into the search input, the function will hide any '.expenses-form-group' elements whose '.expenses-item-label' text does not contain the search term (case-insensitive).
         * This allows the user to quickly find and focus on specific expense items in the form.
         */
        $(document).ready(function() {
            $('#searchInput').on('keyup', function() {
                var searchTerm = $(this).val().toLowerCase();
                $('.expenses-form-group').each(function() {
                    var itemName = $(this).find('.expenses-item-label').text().toLowerCase();
                    var itemName2 = $(this).find(".category-name-input").val().toLowerCase();
                    console.log(categotyFilter);
                    if (categotyFilter === 'All') {
                        if (itemName.indexOf(searchTerm) === -1) {
                            $(this).hide();
                        } else {
                            $(this).show();
                        }
                    } else {
                        if (itemName.indexOf(searchTerm) === -1 || categotyFilter !== itemName2) {
                            $(this).hide();
                        } else {
                            $(this).show();
                        }
                    }


                });
            });
        });

        /**
         * Handles the submission of the 'quickForm' form on the page.
         * - Prevents the default form submission behavior.
         * - Serializes the form data and sends it to the '/addExpenses/save' endpoint via an AJAX POST request.
         * - Includes the user's authentication token in the request headers.
         * - If the token is not found in localStorage, redirects the user to the '/' page.
         * - On successful submission, clears the values of all '.expenses-input' elements.
         * - On error, logs the error to the console.
         */

        $(document).ready(function() {
            $('#quickForm').submit(function(event) {
                event.preventDefault();
                var formData = $(this).serialize();

                var token = sessionStorage.getItem('jwt_token');
                if (!token) {
                    window.location.href = '/user/login';
                } else {

                }

                $.ajax({
                    type: 'POST',
                    url: '/addExpenses/save',
                    data: formData,
                    headers: {
                        'Authorization': 'Bearer ' + token
                    },
                    success: function(response) {
                        console.log('Form submitted successfully');
                        $('.expenses-input').each(function() {
                            $(this).prop('value', '');
                            $(this).removeAttr('required');
                        });
                        viewSuccessMessage();
                    },
                    error: function(xhr, status, error) {
                        console.error('Error submitting form:', error);
                    }
                });
            });
        });

        function viewSuccessMessage() {
            var responseMessage = $('#response-message');
            responseMessage.animate({
                right: '20px'
            }, 'slow');
            setTimeout(function() {
                responseMessage.animate({
                    right: '-500px'
                }, 'slow');
            }, 4000);

        }
    </script>
    <!-- jQuery -->
    <script src="plugins/jquery/jquery.min.js"></script>
    <!-- Bootstrap 4 -->
    <script src="plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
    <!-- AdminLTE App -->
    <script src="dist/js/adminlte.min.js"></script>
</body>

</html>