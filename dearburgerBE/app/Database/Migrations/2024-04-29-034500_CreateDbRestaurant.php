<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CreateDbRestaurant extends Migration
{
    public function up()
    {
        if (!$this->forge->createDatabase('onterrag_dearburger', true)) {
            echo 'Database creation failed!';
            return;
        }
        echo 'Database created successfully!';
    }

    public function down()
    {
        if ($this->forge->dropDatabase('onterrag_dearburger')) {
            echo 'Database deleted successfully!';
        } else {
            echo 'Database deletion failed!';
        }
    }
}
