<?php echo <<<TAG
    <form method="POST" action="process/process.php">
        <div class="form-group">
            <label for="Station">Station</label>
            <input type="text" class="form-control" id="trainStationSearch" name="station">
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
    </form>
TAG
?>