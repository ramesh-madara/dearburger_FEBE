<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CreateTblIngredients extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'ingredientsID' => [
                'type'           => 'INT',
                'auto_increment' => true,
            ],
            'menuItemID' => [
                'type' => 'CHAR',
                'constraint' => 5,
            ],
            'inventoryItemID' => [
                'type' => 'CHAR',
                'constraint' => 5,
            ],
            'isParking' => [
                'type' => 'VARCHAR',
                'constraint' => 20,
            ],
        ]);
        $this->forge->addKey('ingredientsID', true);
        $this->forge->createTable('tblIngredients');
    }

    public function down()
    {
        $this->forge->dropTable('tblIngredients');
    }
}
