<?php
// deploy.php - Pull Request Interface

// Simulating commit history for dropdown menu
$commits = [
    'Commit 1 - Initial setup',
    'Commit 2 - Added feature X',
    'Commit 3 - Fixed bug Y',
    'Commit 4 - Updated documentation',
];

// Function to display the dropdown menu
function displayCommitDropdown($commits) {
    echo '<select name="commits">';
    foreach ($commits as $commit) {
        echo '<option value="' . htmlspecialchars($commit) . '">' . htmlspecialchars($commit) . '</option>';
    }
    echo '</select>';
}

// HTML Content
ob_start();
?>
<!DOCTYPE html>
<html>
<head>
    <title>Deploy Page</title>
</head>
<body>
<h1>Pull Request Interface</h1>
<form action="#" method="post">
    <h2>Select a Commit to Restore:</h2>
    <?php displayCommitDropdown($commits); ?>
    <button type="submit">Restore</button>
</form>
<p><a href="index.php">Go to Main Page</a></p>
</body>
</html>
<?php
$content = ob_get_clean();
// Output the content
file_put_contents('deploy.php', $content);
?>
