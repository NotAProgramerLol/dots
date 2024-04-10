const systemtray = await Service.import('systemtray');

/** @param {import('types/service/systemtray').TrayItem} item */
const SysTrayItem = (item) =>
  Widget.Button({
    child: Widget.Icon().bind('icon', item, 'icon'),
    tooltipMarkup: item.bind('tooltip_markup'),
    onPrimaryClick: (_, event) => item.activate(event),
    onSecondaryClick: (_, event) => item.openMenu(event),
  });

const sysTray = Widget.Box({
  children: systemtray.bind('items').as((i) => i.map(SysTrayItem)),
});

function Bar(monitor = 0) {
  const date = Variable('', {
    poll: [1000, 'date'],
  });

  return Widget.Window({
    monitor,
    name: `bar${monitor}`, // this name has to be unique
    anchor: ['top', 'left', 'right'],
    child: Widget.Label({
      label: date.bind(),
    }),
  });
}

App.config({
  windows: [
    Bar(0),
    Bar(1),
  ],
});
