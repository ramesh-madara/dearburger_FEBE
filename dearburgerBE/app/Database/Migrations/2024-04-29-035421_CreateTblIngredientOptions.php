<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CreateTblIngredientOptions extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'ingredientsOptionID' => [
                'type' => 'CHAR',
                'constraint' => 5,
            ],
            'ingredientsID' => [
                'type' => 'INT'
            ],
            'variation' => [
                'type'           => 'DECIMAL',
                'constraint'     => '10,2',
            ],
        ]);
        $this->forge->addKey('ingredientsOptionID', true);
        $this->forge->createTable('tblIngredientOptions');
    }

    public function down()
    {
        $this->forge->dropTable('tblIngredientOptions');
    }
}
