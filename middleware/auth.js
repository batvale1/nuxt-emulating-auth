export default function(context) {
  if (!context.store.getters['auth/getUserLogStatus']) {
    console.log(context.store.getters.getUserLogStatus);
    console.log('here2');
    context.redirect("/auth");
  }
}
