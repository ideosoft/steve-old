--

ALTER TABLE `apps` ADD COLUMN `alias` VARCHAR(64) NOT NULL DEFAULT '';

--//@UNDO

ALTER TABLE `apps` DROP COLUMN `alias`;

--