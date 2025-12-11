<?php
$etablissement = "École Supérieure XYZ";
$module = "Développement Web";
$annee = 2025;

$a = 7;
$b = 3;

$addition = $a + $b;
$multiplication = $a * $b;
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Informations PHP</title>
</head>
<body>

<h1>Informations Générées avec PHP</h1>

<p><strong>Établissement :</strong> <?= $etablissement ?></p>
<p><strong>Module :</strong> <?= $module ?></p>
<p><strong>Année :</strong> <?= $annee ?></p>

<h2>Exemples de calculs</h2>
<p><?= $a ?> + <?= $b ?> = <?= $addition ?></p>
<p><?= $a ?> × <?= $b ?> = <?= $multiplication ?></p>

</body>
</html>
