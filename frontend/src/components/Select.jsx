import React, { useEffect} from 'react'
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import Input from './Input'

const DistributionBasis = [
  {
    id: 1,
    basis: 'difficulty',
  },
  {
    id: 2,
    basis: 'topic',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Select({onBasisChange}) {
  const [selected, setSelected] = useState(DistributionBasis[0])
  const [easy, setEasy] = useState(0);
  const [medium, setMedium] = useState(0);
  const [hard, setHard] = useState(0);
  const [difficultyInputsVisible, setDifficultyInputsVisible] = useState(false);

  const handleDifficultyChange = (value, level) => {
    if (level === 'easy') setEasy(value);
    if (level === 'medium') setMedium(value);
    if (level === 'hard') setHard(value);

    // if (onBasisChange && selected.basis === 'difficulty') {
    //    onBasisChange('difficulty');
    // }
  };

  const renderDifficultyInputs = () => {
    return (
      <div className="mt-4 space-y-4">
        <Input
        for = "easy"
        label="Easy Percentage"
          type="text"
          name="easy"
          id="easy"
          placeholder="Type Easy Percentage"
          value={easy}
          onChange={(e) => handleDifficultyChange(e.target.value, 'easy')}
        />
        <Input
        for="medium"
        label = "Medium Percentage"
          type="text"
          name="medium"
          id="medium"
          placeholder="Type Medium Percentage"
          value={medium}
          onChange={(e) => handleDifficultyChange(e.target.value, 'medium')}
        />
        <Input
        for="hard"
        label = "Hard Percentage"
          type="text"
          name="hard"
          id="hard"
          placeholder="Type Hard Percentage"
          value={hard}
          onChange={(e) => handleDifficultyChange(e.target.value, 'hard')}
        />
      </div>
    );
  };

//   useEffect(() => {
//     console.log('Selected basis', selected.basis);

//     if (onBasisChange) {
//       onBasisChange(selected.basis);
//     }
//   }, [selected, onBasisChange]);


  return (
    <Listbox value={selected} onChange={(value) => {
      setSelected(value);
      setDifficultyInputsVisible(value.basis === 'difficulty');
    }}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">Distribution basis</Listbox.Label>
          <div className="relative mt-2">
            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
              <span className="flex items-center">
                <span className="ml-3 block truncate">{selected.basis}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {DistributionBasis.map((item) => (
                  <Listbox.Option
                    key={item.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-reelobg text-white' : 'text-black',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          
                          <span
                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                          >
                            {item.basis}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-reelobg',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                        
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
          {selected.basis === 'difficulty' && difficultyInputsVisible && renderDifficultyInputs()}
        </>
      )}
    </Listbox>
  )
}
