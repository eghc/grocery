
-- CREATE TRIGGER person_notify AFTER INSERT OR UPDATE OR DELETE ON income
-- FOR EACH ROW EXECUTE PROCEDURE notify_trigger(
--   'id',
--   'email',
--   'username'
-- );

CREATE TRIGGER income_notify AFTER INSERT OR UPDATE OR DELETE ON "listItems"
FOR EACH ROW EXECUTE PROCEDURE notify_trigger(
  'id',
  'item',
  'cost',
  'purchased',
  'purchaseDate',
  'userId'
);
