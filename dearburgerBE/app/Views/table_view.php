<?= form_open('crud/table/insert') ?>
<?php foreach ($fields as $field) : ?>
    <?php if ($field->primary_key !== 1) : ?>
        <div>
            <?= form_label($field->name, $field->name) ?>
            <?php if (strpos($field->type, 'int') !== false) : ?>
                <?= form_input(['name' => $field->name, 'type' => 'number']) ?>
            <?php elseif (strpos($field->type, 'float') !== false || strpos($field->type, 'double') !== false) : ?>
                <?= form_input(['name' => $field->name, 'type' => 'number', 'step' => 'any']) ?>
            <?php elseif (strpos($field->type, 'bool') !== false) : ?>
                <?= form_checkbox(['name' => $field->name, 'value' => '1']) ?>
            <?php else : ?>
                <?= form_input(['name' => $field->name, 'type' => 'text']) ?>
            <?php endif; ?>
        </div>
    <?php endif; ?>
<?php endforeach; ?>
<?= form_submit('submit', 'Submit') ?>
<?= form_close() ?>