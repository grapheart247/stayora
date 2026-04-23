<?php
/**
 * StayOra Deployment Management Page
 * Displays GitHub commit history and deployment information
 */

// GitHub API Configuration
$github_owner = 'grapheart247';
$github_repo = 'stayora';
$api_url = "https://api.github.com/repos/{$github_owner}/{$github_repo}/commits";

// Function to fetch commits from GitHub
function fetchCommits($url) {
    $context = stream_context_create([
        'http' => [
            'method' => 'GET',
            'header' => "User-Agent: StayOra-Deploy\r\n",
            'timeout' => 10
        ]
    ]);
    
    $response = @file_get_contents($url, false, $context);
    return $response ? json_decode($response, true) : [];
}

$commits = fetchCommits($api_url);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>StayOra - Deployment Management</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        :root {
            --primary: #d4a574;
            --secondary: #2d5016;
            --accent: #8b6f47;
        }
        
        body { background: linear-gradient(135deg, #faf7f2 0%, #f5f1e8 100%); }
        
        .header { background: linear-gradient(135deg, var(--primary), var(--accent)); }
        
        .commit-card {
            background: white;
            border: 2px solid var(--primary);
            border-radius: 12px;
            padding: 1.5rem;
            margin-bottom: 1rem;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .commit-card:hover {
            transform: translateX(5px);
            box-shadow: 0 10px 30px rgba(212, 165, 116, 0.2);
        }
        
        .commit-card.active {
            background: linear-gradient(135deg, rgba(212, 165, 116, 0.1), rgba(45, 80, 22, 0.1));
            border-color: var(--secondary);
        }
        
        .commit-id {
            font-family: 'Courier New', monospace;
            background: #f5f1e8;
            padding: 0.25rem 0.75rem;
            border-radius: 4px;
            color: var(--primary);
            font-weight: bold;
            display: inline-block;
        }
        
        .detail-box {
            background: white;
            border: 2px solid var(--primary);
            border-radius: 12px;
            padding: 2rem;
            min-height: 400px;
        }
    </style>
</head>
<body>
    <div class="max-w-6xl mx-auto py-8 px-4">
        <!-- Header -->
        <div class="header text-white p-8 rounded-lg mb-8 shadow-lg">
            <h1 class="text-4xl font-bold mb-2">
                <i class="fas fa-rocket mr-3"></i>StayOra Deploy Manager
            </h1>
            <p class="text-lg opacity-90">Manage repository commits and deployments</p>
        </div>

        <!-- Main Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <!-- Commits List -->
            <div class="lg:col-span-1">
                <h2 class="text-2xl font-bold mb-4" style="color: var(--secondary);">
                    <i class="fas fa-code-branch mr-2"></i>Commit History
                </h2>
                
                <?php if (empty($commits)): ?>
                    <div class="bg-red-50 p-4 rounded-lg text-red-700">
                        <i class="fas fa-exclamation-circle mr-2"></i>
                        Unable to fetch commits. Check GitHub API.
                    </div>
                <?php else: ?>
                    <div id="commits-list">
                        <?php foreach (array_slice($commits, 0, 20) as $index => $commit): ?>
                            <div class="commit-card" onclick="selectCommit(<?php echo $index; ?>, this)">
                                <div class="commit-id mb-2"><?php echo substr($commit['sha'], 0, 7); ?></div>
                                <p class="text-gray-700 text-sm font-bold">
                                    <?php echo htmlspecialchars(substr($commit['commit']['message'], 0, 40)); ?>...
                                </p>
                                <p class="text-gray-500 text-xs mt-1">
                                    By: <?php echo htmlspecialchars($commit['commit']['author']['name']); ?>
                                </p>
                            </div>
                        <?php endforeach; ?>
                    </div>
                <?php endif; ?>
            </div>

            <!-- Commit Details -->
            <div class="lg:col-span-2">
                <h2 class="text-2xl font-bold mb-4" style="color: var(--secondary);">
                    <i class="fas fa-info-circle mr-2"></i>Details
                </h2>
                <div id="detail-box" class="detail-box">
                    <p class="text-gray-500 text-center py-12">Select a commit to view details</p>
                </div>
            </div>
        </div>
    </div>

    <script>
        const commitsData = <?php echo json_encode($commits); ?>;

        function selectCommit(index, element) {
            document.querySelectorAll('.commit-card').forEach(card => card.classList.remove('active'));
            element.classList.add('active');

            const commit = commitsData[index];
            const date = new Date(commit.commit.author.date).toLocaleString();
            const fullMessage = commit.commit.message.replace(/</g, '&lt;').replace(/>/g, '&gt;');

            document.getElementById('detail-box').innerHTML = `
                <div class="space-y-6">
                    <div style="background: linear-gradient(135deg, rgba(212, 165, 116, 0.1), rgba(45, 80, 22, 0.1)); padding: 1.5rem; border-radius: 8px;">
                        <h3 class="text-xl font-bold mb-2" style="color: var(--secondary);">
                            ${commit.commit.message.split('\\n')[0]}
                        </h3>
                    </div>

                    <div>
                        <p class="font-bold" style="color: var(--secondary);">Commit ID (SHA)</p>
                        <p class="font-mono text-sm break-all">${commit.sha}</p>
                    </div>

                    <div>
                        <p class="font-bold" style="color: var(--secondary);">Author</p>
                        <p>${commit.commit.author.name}</p>
                        <p class="text-sm text-gray-600">${commit.commit.author.email}</p>
                    </div>

                    <div>
                        <p class="font-bold" style="color: var(--secondary);">Date & Time</p>
                        <p>${date}</p>
                    </div>

                    <div>
                        <p class="font-bold" style="color: var(--secondary);">Message</p>
                        <pre style="background: #f9f9f9; padding: 1rem; border-radius: 4px; overflow-x: auto; font-size: 0.875rem; border-left: 4px solid var(--primary);">${fullMessage}</pre>
                    </div>

                    <a href="${commit.html_url}" target="_blank" class="inline-block" style="background: linear-gradient(135deg, var(--primary), var(--accent)); color: white; padding: 0.75rem 1.5rem; border-radius: 8px; text-decoration: none; font-weight: bold;">
                        <i class="fas fa-external-link-alt mr-2"></i>View on GitHub
                    </a>
                </div>
            `;
        }

        // Load first commit details
        if (commitsData.length > 0) {
            document.querySelector('.commit-card').click();
        }
    </script>
</body>
</html>
