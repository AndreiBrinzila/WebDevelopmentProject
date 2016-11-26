<?php echo <<<TAG
    <form method="POST" action="process/process.php" id="trainSearch">
        <div class="form-group">
            <label for="Station">Station</label>
            <input type="text" class="form-control" id="trainStationSearch" name="station">
        </div>
        <button type="submit" class="btn btn-default" id="sendStopData">Submit</button>
    </form>
TAG
?>