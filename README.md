<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Booster System Documentation</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
            background-color: #f4f4f4;
        }

        h1,
        h2 {
            color: #333;
        }

        pre {
            background-color: #eee;
            padding: 10px;
            border-radius: 5px;
            overflow-x: auto;
        }

        code {
            font-family: monospace;
            background-color: #e7e7e7;
            padding: 2px 5px;
            border-radius: 3px;
        }

        .snippet {
            margin-bottom: 30px;
        }
    </style>
</head>

<body>

    <h1>Booster System Documentation</h1>
    <p>This document contains an overview of the Booster System implemented in the game, along with relevant code snippets and their descriptions.</p>

    <div class="snippet">
        <h2>1. BloomingFlowerBooster</h2>
        <pre><code>
public class BloomingFlowerBooster : InGBooster
{
    public BloomingFlowerBooster(string boosterID, bool availability, int colorCollectingAmount, int quantity)
        : base(BoosterType.BloomingFlower, boosterID, availability, colorCollectingAmount, quantity)
    {
    }

    public override void PlayBoosterVFX(Sprite boosterIcon) { /* ... */ }
    public override void OnComplete() { /* ... */ }
    public override void OnBoosterUse(Sprite boosterIcon) { /* ... */ }
}
        </code></pre>
        <p><strong>Description:</strong> This class represents a specific type of in-game booster, the Blooming Flower, and overrides methods to implement its unique behavior.</p>
    </div>

    <div class="snippet">
        <h2>2. HammerBooster</h2>
        <pre><code>
public class HammerBooster : InGBooster
{
    public HammerBooster(string boosterID, bool availability, int colorCollectingAmount, int quantity)
        : base(BoosterType.Hammer, boosterID, availability, colorCollectingAmount, quantity)
    {
    }

    public override void PlayBoosterVFX(Sprite boosterIcon) { /* ... */ }
    public override void OnComplete() { /* ... */ }
    public override void OnBoosterUse(Sprite boosterIcon) { /* ... */ }
}
        </code></pre>
        <p><strong>Description:</strong> Represents the Hammer booster type, allowing players to destroy obstacles or enemies in the game.</p>
    </div>

    <div class="snippet">
        <h2>3. ShuffleBooster</h2>
        <pre><code>
public class ShuffleBooster : InGBooster
{
    public ShuffleBooster(string boosterID, bool availability, int colorCollectingAmount, int quantity)
        : base(BoosterType.Shuffle, boosterID, availability, colorCollectingAmount, quantity)
    {
    }

    public override void PlayBoosterVFX(Sprite boosterIcon) { /* ... */ }
    public override void OnComplete() { /* ... */ }
    public override void OnBoosterUse(Sprite boosterIcon) { /* ... */ }
}
        </code></pre>
        <p><strong>Description:</strong> This class represents the Shuffle booster, which shuffles items on the board to provide new gameplay options.</p>
    </div>

    <div class="snippet">
        <h2>4. HintBooster</h2>
        <pre><code>
public class HintBooster : InGBooster
{
    public HintBooster(string boosterID, bool availability, int colorCollectingAmount, int quantity)
        : base(BoosterType.Hint, boosterID, availability, colorCollectingAmount, quantity)
    {
    }

    public override void PlayBoosterVFX(Sprite boosterIcon) { /* ... */ }
    public override void OnComplete() { /* ... */ }
    public override void OnBoosterUse(Sprite boosterIcon) { /* ... */ }
}
        </code></pre>
        <p><strong>Description:</strong> Represents the Hint booster, providing players with clues on potential moves to make in the game.</p>
    </div>

    <div class="snippet">
        <h2>5. BoosterColorCollection</h2>
        <pre><code>
public class BoosterColorCollection : MonoBehaviour
{
    public List<Color> boosterColors;
    public List<string> collectedColors;

    public void CollectColor(string colorId) { /* ... */ }
    public void UpdateColorUI() { /* ... */ }
}
        </code></pre>
        <p><strong>Description:</strong> This class manages the collection of colors available for boosters, tracking which colors are collected and updating the player’s status accordingly.</p>
    </div>

    <div class="snippet">
        <h2>6. BoosterManager</h2>
        <pre><code>
public class BoosterManager : MonoBehaviour
{
    public List<InGBooster> activeBoosters;

    public void ActivateBooster(InGBooster booster) { /* ... */ }
    public void DeactivateBooster(InGBooster booster) { /* ... */ }
}
        </code></pre>
        <p><strong>Description:</strong> The central manager for all booster-related functionalities, overseeing the interaction between boosters and managing their states.</p>
    </div>

    <div class="snippet">
        <h2>7. FloatingCellManager</h2>
        <pre><code>
public class FloatingCellManager : MonoBehaviour
{
    private GameObject myLeaderboardCell;
    private GameObject myLeaderboardCellFollowerBottom;
    private GameObject myLeaderboardCellFollowerTop;

    public void SpawnFollowerTile(GameObject parentItem, FloatingTileType type, Transform followerLeaderboardCellParent, LeaderboardEntryUI myLBCell) { /* ... */ }
    public void DestroyAllFollowerTiles() { /* ... */ }
}
        </code></pre>
        <p><strong>Description:</strong> Manages the floating leaderboard cells that follow the player's leaderboard entry, controlling their appearance and position.</p>
    </div>

    <div class="snippet">
        <h2>8. LBEntryDataModel</h2>
        <pre><code>
public class LBEntryDataModel : NetworkedObjectModel
{
    public int rank, streak;
    public string profilePic;

    public string _name;
    public string _playerWalletId;
    public string _score;

    public LBEntryDataModel(JToken data) { /* ... */ }
    public void PopulateObjectWithData(JToken data) { /* ... */ }
}
        </code></pre>
        <p><strong>Description:</strong> Represents a single entry in the leaderboard, holding player information such as name, wallet ID, score, and profile picture.</p>
    </div>

    <div class="snippet">
        <h2>9. LeaderBoardController</h2>
        <pre><code>
public class LeaderBoardController : Menu
{
    public LeaderBoardUIHandler lbUIhandler;
    public List<LBEntryDataModel> lbEntryDataModelList = new List<LBEntryDataModel>();

    public void FetchLBData(LBGameType gameType, LBType _lbType) { /* ... */ }
    public void LoadLeaderboardData() { /* ... */ }
    private void PopulateLeaderboard() { /* ... */ }
}
        </code></pre>
        <p><strong>Description:</strong> Controls the fetching and displaying of leaderboard data, handling the interaction between UI elements and data models.</p>
    </div>

    <h2>Conclusion</h2>
    <p>This documentation provides a comprehensive overview of the classes that form the Booster System in your game, illustrating how they work together to create an engaging user experience.</p>

</body>

</html>

