
v.component['card-slider'] = {
  view: (vnode) =>
    m('.v-slider',
      vnode.attrs.events.map((event) =>
        m('a.mdc-card mdc-card--theme-dark v-card v-card-slider', {
          href: '/event/' + event.id,
          oncreate: m.route.link
          },
          m('section.mdc-card__media', {
            style: 'background-image: url(' + event.photo + ')'
            },
            m('h1.mdc-card__title mdc-card__title--large',
              event.name
            ),
            m('h2.mdc-card__subtitle',
              new Date(event.start_time).toLocaleString('bg-BG', {
                weekday: 'long', day: 'numeric', month: 'long',
                hour: 'numeric', minute: 'numeric'
              }) + ' ч.'
            )
          )
        )
      )
    )
}
